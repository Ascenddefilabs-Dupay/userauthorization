from django.core.mail import send_mail
from django.conf import settings
from django.core.cache import cache
from django.shortcuts import render
from django.views import View
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Project,CustomUser
from .serializers import FiatWalletSerializer, ProjectSerializer,CustomUserSerializer, UserSerializer
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from django.contrib.auth import login as auth_login
from datetime import datetime, timedelta, timezone
from django.http import JsonResponse
from django.db import connection, models
from .models import FiatWallet
from rest_framework.views import APIView
from django.shortcuts import render
from rest_framework import viewsets, status
from .models import FiatWallet
from rest_framework.views import APIView
import bcrypt
from django.core.mail import send_mail
import logging
from django.conf import settings
from django.core.cache import cache
from django.utils.crypto import get_random_string
from django.shortcuts import render


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    lookup_field = 'user_id'

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
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


        
def fetch_crypto_wallet_table(request, user_id=None):
    with connection.cursor() as cursor:
        if user_id:
            cursor.execute("""
                SELECT wallet_id, sui_address, balance, user_id
                FROM crypto_wallet_table
                WHERE user_id = %s
            """, [user_id])
        else:
            cursor.execute("SELECT wallet_id, sui_address, balance, user_id FROM crypto_wallet_table")

        result = cursor.fetchall()

        if not result:
            return JsonResponse({'message': 'No records found'}, status=404)

        columns = [col[0] for col in cursor.description]
        data = [dict(zip(columns, row)) for row in result]

    return JsonResponse(data, safe=False)

class FetchQRCodeView(View):

    def get(self, request, *args, **kwargs):
        user_id = request.GET.get('user_id')  
        if not user_id:
            return JsonResponse({'error': 'User ID is required.'}, status=400)

        qr_code = None
        email = None
        mobile_number = None
        first_name = None  

        try:
            with connection.cursor() as cursor:
                cursor.execute("""
                    SELECT f.qr_code, f.fiat_wallet_email, f.fiat_wallet_phone_number, u.user_first_name
                    FROM fiat_wallet f
                    JOIN users u ON f.user_id = u.user_id
                    WHERE f.user_id = %s
                """, [user_id])
                
                row = cursor.fetchone()

                if row:
                    qr_code = row[0] 
                    email = row[1]   
                    mobile_number = row[2]
                    first_name = row[3] 
                else:
                    return JsonResponse({'error': 'Details not found for this user ID.'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

        return JsonResponse({
            'qr_code': qr_code,
            'email': email,
            'mobile_number': mobile_number,
            'first_name': first_name
        })