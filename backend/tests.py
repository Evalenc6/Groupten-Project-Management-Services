from django.test import TestCase
from django.urls import reverse
from .models import Project, EffortLog, Requirement, CustomUser
from django.contrib.auth import get_user_model

class APITestCase(TestCase):
    def setUp(self):
        # Create test data
        self.user = CustomUser.objects.create_user(username='testuser', password='password', role='TeamMember')
        self.project = Project.objects.create(name='Test Project', description='Test Description')
        self.effort = EffortLog.objects.create(user=self.user, project=self.project, hours=5)
        self.requirement = Requirement.objects.create(project=self.project, details='Test Requirement', status='Pending', tag='Functional')

    def test_create_project(self):
        User = get_user_model()
        User.objects.create_user(username='testuser', password='password')
        response = self.client.post(reverse('create_project'), {'name': 'New Project', 'description': 'New Description'}, content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_login_user(self):
        response = self.client.post(reverse('login_user'), {'username': 'testuser', 'password': 'password'}, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_get_effort_report(self):
        response = self.client.get(reverse('get_effort_report'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('effort_report', response.json())

    def test_get_requirement_report(self):
        response = self.client.get(reverse('get_requirement_report'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('requirement_report', response.json())
