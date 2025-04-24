from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.views.decorators.http import require_http_methods
from .models import Project
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