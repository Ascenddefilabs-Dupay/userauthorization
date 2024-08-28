from rest_framework import serializers
from .models import Project,CustomUser,Notificationthings,Password,FiatWallet, User



class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notificationthings
        fields = '__all__'

class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Password
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
# Serializer for FiatWallet (optional if you need to use it)
class FiatWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = FiatWallet
        fields = '__all__'