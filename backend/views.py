from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.views.decorators.http import require_http_methods
from .models import Project, Risk, CustomUser, EffortLog, Requirement
from django.http import JsonResponse
from .models import Project


@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = get_user_model().objects.create_user(
            username=data['username'],
            password=data['password'],
            role=data['role']
        )
        return JsonResponse({'message': 'User registered successfully'}, status=201)

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = get_user_model().objects.filter(username=data['username']).first()
        if user and user.check_password(data['password']):
            return JsonResponse({'message': 'Login successful'}, status=200)
        return JsonResponse({'error': 'Invalid credentials'}, status=401)

@csrf_exempt
def logout_user(request):
    return JsonResponse({'message': 'Logout successful'}, status=200)

@csrf_exempt
@require_http_methods(["POST"])
def create_project(request):
    data = json.loads(request.body)
    project = Project.objects.create(name=data['name'], description=data['description'])
    return JsonResponse({'message': 'Project created successfully', 'id': project.id}, status=201)

@csrf_exempt
@require_http_methods(["GET"])
def get_projects(request):
    projects = list(Project.objects.values())
    return JsonResponse({'projects': projects}, status=200)

@csrf_exempt
@require_http_methods(["PUT", "PATCH"])
def update_project(request, project_id):
    data = json.loads(request.body)
    project = Project.objects.filter(id=project_id).first()
    if not project:
        return JsonResponse({'error': 'Project not found'}, status=404)
    project.name = data.get('name', project.name)
    project.description = data.get('description', project.description)
    project.save()
    return JsonResponse({'message': 'Project updated successfully'}, status=200)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_project(request, project_id):
    project = Project.objects.filter(id=project_id).first()
    if not project:
        return JsonResponse({'error': 'Project not found'}, status=404)
    project.delete()
    return JsonResponse({'message': 'Project deleted successfully'}, status=200)

@csrf_exempt
@require_http_methods(["POST"])
def create_project(request):
    data = json.loads(request.body)
    project = Project.objects.create(name=data['name'], description=data['description'])
    return JsonResponse({'message': 'Project created successfully', 'id': project.id}, status=201)

@csrf_exempt
@require_http_methods(["POST"])
def create_risk(request):
    data = json.loads(request.body)
    project = Project.objects.filter(id=data['project_id']).first()
    if not project:
        return JsonResponse({'error': 'Project not found'}, status=404)
    risk = Risk.objects.create(
        project=project,
        description=data['description'],
        level=data['level'],
        mitigation_plan=data.get('mitigation_plan', '')
    )
    return JsonResponse({'message': 'Risk created successfully', 'id': risk.id}, status=201)

@csrf_exempt
@require_http_methods(["GET"])
def get_risks(request):
    risks = list(Risk.objects.values())
    return JsonResponse({'risks': risks}, status=200)

@csrf_exempt
@require_http_methods(["PUT", "PATCH"])
def update_risk(request, risk_id):
    data = json.loads(request.body)
    risk = Risk.objects.filter(id=risk_id).first()
    if not risk:
        return JsonResponse({'error': 'Risk not found'}, status=404)
    risk.description = data.get('description', risk.description)
    risk.level = data.get('level', risk.level)
    risk.mitigation_plan = data.get('mitigation_plan', risk.mitigation_plan)
    risk.save()
    return JsonResponse({'message': 'Risk updated successfully'}, status=200)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_risk(request, risk_id):
    risk = Risk.objects.filter(id=risk_id).first()
    if not risk:
        return JsonResponse({'error': 'Risk not found'}, status=404)
    risk.delete()
    return JsonResponse({'message': 'Risk deleted successfully'}, status=200)

@csrf_exempt
@require_http_methods(["POST"])
def log_effort(request):
    data = json.loads(request.body)
    user = CustomUser.objects.filter(id=data['user_id']).first()
    project = Project.objects.filter(id=data['project_id']).first()
    if not user or not project:
        return JsonResponse({'error': 'User or Project not found'}, status=404)
    effort = EffortLog.objects.create(
        user=user,
        project=project,
        hours=data['hours']
    )
    return JsonResponse({'message': 'Effort logged successfully', 'id': effort.id}, status=201)

@csrf_exempt
@require_http_methods(["GET"])
def get_efforts(request):
    efforts = list(EffortLog.objects.values())
    return JsonResponse({'efforts': efforts}, status=200)

@csrf_exempt
@require_http_methods(["POST"])
def create_requirement(request):
    data = json.loads(request.body)
    project = Project.objects.filter(id=data['project_id']).first()
    if not project:
        return JsonResponse({'error': 'Project not found'}, status=404)
    requirement = Requirement.objects.create(
        project=project,
        details=data['details'],
        status=data.get('status', 'Pending'),
        tag=data.get('tag', 'Functional')
    )
    return JsonResponse({'message': 'Requirement created successfully', 'id': requirement.id}, status=201)

@csrf_exempt
@require_http_methods(["GET"])
def get_requirements(request):
    requirements = list(Requirement.objects.values())
    return JsonResponse({'requirements': requirements}, status=200)

@csrf_exempt
@require_http_methods(["PUT", "PATCH"])
def update_requirement(request, requirement_id):
    data = json.loads(request.body)
    requirement = Requirement.objects.filter(id=requirement_id).first()
    if not requirement:
        return JsonResponse({'error': 'Requirement not found'}, status=404)
    requirement.details = data.get('details', requirement.details)
    requirement.status = data.get('status', requirement.status)
    requirement.tag = data.get('tag', requirement.tag)
    requirement.save()
    return JsonResponse({'message': 'Requirement updated successfully'}, status=200)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_requirement(request, requirement_id):
    requirement = Requirement.objects.filter(id=requirement_id).first()
    if not requirement:
        return JsonResponse({'error': 'Requirement not found'}, status=404)
    requirement.delete()
    return JsonResponse({'message': 'Requirement deleted successfully'}, status=200)