"""
URL configuration for project_management project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from backend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/register/', views.register_user),
    path('api/auth/login/', views.login_user),
    path('api/auth/logout/', views.logout_user),
    path('api/projects/create/', views.create_project),
    path('api/projects/', views.get_projects),
    path('api/projects/update/<int:project_id>/', views.update_project),
    path('api/projects/delete/<int:project_id>/', views.delete_project),
]

urlpatterns += [
    path('api/projects/risks/create/', views.create_risk),
    path('api/projects/risks/get/', views.get_risks),
    path('api/projects/risks/update/<int:risk_id>/', views.update_risk),
    path('api/projects/risks/delete/<int:risk_id>/', views.delete_risk),
    path('api/projects/efforts/log/', views.log_effort),
    path('api/projects/efforts/get/', views.get_efforts),
    path('api/projects/req/create/', views.create_requirement),
    path('api/projects/req/get/', views.get_requirements),
    path('api/projects/req/update/<int:requirement_id>/', views.update_requirement),
    path('api/projects/req/delete/<int:requirement_id>/', views.delete_requirement),
]
