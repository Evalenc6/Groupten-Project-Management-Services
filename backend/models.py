from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('PM', 'Project Manager'),
        ('TeamMember', 'Team Member'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='TeamMember')

    # Add related_name attributes to avoid conflicts
    groups = models.ManyToManyField(
        Group,
        related_name="customuser_set",  # Avoid conflict with auth.User.groups
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_permissions_set",  # Avoid conflict with auth.User.user_permissions
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions",
    )

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class UserProject(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    role = models.CharField(max_length=50)  # e.g., 'Owner', 'Contributor'

class Risk(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    description = models.TextField()
    level = models.CharField(max_length=50)  # e.g., 'Low', 'Medium', 'High'
    mitigation_plan = models.TextField(blank=True, null=True)  # Optional field

class EffortLog(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    hours = models.IntegerField()
    date_logged = models.DateTimeField(auto_now_add=True)

class Requirement(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    details = models.TextField()
    status = models.CharField(max_length=50, default='Pending')  # e.g., 'Pending', 'Completed'
    tag = models.CharField(max_length=50, default='Functional')  # e.g., 'Functional', 'Non-functional'

class Report(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    content = models.TextField()
