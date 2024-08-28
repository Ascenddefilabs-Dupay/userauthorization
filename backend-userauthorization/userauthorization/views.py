from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Project,CustomUser, User
from .serializers import FiatWalletSerializer, ProjectSerializer,CustomUserSerializer, UserSerializer
from django.shortcuts import get_object_or_404
from .models import Notificationthings
from .models import Password
from .serializers import NotificationSerializer
from .serializers import PasswordSerializer
from django.http import JsonResponse
from django.db import connection, models
from .models import FiatWallet
from rest_framework.views import APIView
    




class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# class UserProfileView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    lookup_field = 'user_id'


from django.shortcuts import render

# Create your views here.




class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notificationthings.objects.all()
    serializer_class = NotificationSerializer

    def create(self, request, *args, **kwargs):
        user_id = 'dupA0005'
        product_announcement = request.data.get('product_announcement', False)
        insights_tips = request.data.get('insights_tips', False)
        special_offers = request.data.get('special_offers', False)
        price_alerts = request.data.get('price_alerts', False)
        account_activity = request.data.get('account_activity', False)
        messages = request.data.get('messages', False)

        # Check if the user_id exists in the database
        notification, created = Notificationthings.objects.get_or_create(
            user_id=user_id,
            defaults={
                'product_announcement': product_announcement,
                'insights_tips': insights_tips,
                'special_offers': special_offers,
                'price_alerts': price_alerts,
                'account_activity': account_activity,
                'messages': messages
            }
        )

        if not created:
            notification.product_announcement = product_announcement
            notification.insights_tips = insights_tips
            notification.special_offers = special_offers
            notification.price_alerts = price_alerts
            notification.account_activity = account_activity
            notification.messages = messages
            notification.save()

        serializer = self.get_serializer(notification)
        if created:
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)


class PasswordViewSet(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer

    def create(self, request, *args, **kwargs):
        id = 12345
        password_creation = request.data.get('password_creation')
        password_setting, created = Password.objects.get_or_create(
            id=id,
            defaults={
                'password_creation': password_creation,
            }
        )
        if not created:
            password_setting.password_creation = password_creation
            password_setting.save()

        serializer = self.get_serializer(password_setting)
        if created:
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_200_OK)
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)

class RepasswordViewSet(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer

    def create(self, request, *args, **kwargs):
        id = 12345
        password_creation = request.data.get('password_creation')
        retype_password = request.data.get('retype_password')
        print(type(password_creation),type(retype_password))
        password_setting, created = Password.objects.get_or_create(
            id=id,
            defaults={
                'retype_password': retype_password,
            }
        )
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM app_password")
            rows = cursor.fetchall()
        
        id_list = []
        password_list = []
        retype_list = []

        for i in rows:
            id_list.append(i[0])
            password_list.append(i[1])
            retype_list.append(i[2])
        index = 0
        if id in id_list:
            index = id_list.index(id)

        print(password_list[index] != retype_list[index], password_list[index],retype_list[index])

        if password_list[index] != retype_password:
            return JsonResponse({'status': 'password_failure', 'message': 'Password Must Be Same'})

        if not created:
            password_setting.retype_password = retype_password
            password_setting.save()

        serializer = self.get_serializer(password_setting)
        if created:
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # lookup_field="id"

class FiatWalletViewSet(viewsets.ModelViewSet):
    queryset = FiatWallet.objects.all()
    serializer_class = FiatWalletSerializer
    lookup_field="fiat_wallet_id"

class FiatWalletfetch(viewsets.ModelViewSet):
    serializer_class = FiatWalletSerializer
    lookup_field="user_id"


    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        print(f"Fetching FiatWallet for user_id: {user_id}")  # Debugging output

        if user_id:
            queryset = FiatWallet.objects.filter(user_id=user_id)
            print(f"Queryset: {queryset}")  # Debugging output
            return queryset
        
        return FiatWallet.objects.all()