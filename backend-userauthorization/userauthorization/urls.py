from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet,CustomUserViewSet
from .views import NotificationViewSet
from .views import PasswordViewSet, RepasswordViewSet



router = DefaultRouter()

router.register(r'projects',ProjectViewSet)
router.register(r'profile',CustomUserViewSet,basename="myProfile")
router.register(r'notification', NotificationViewSet, basename='notification')
router.register(r'password', PasswordViewSet, basename='password')
router.register(r'repassword', RepasswordViewSet, basename='repassword')







urlpatterns = [
    path('',include(router.urls)),
    # path('profile/<pk>/', UserProfileView.as_view())
    
]