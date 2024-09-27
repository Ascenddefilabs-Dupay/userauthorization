from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views import View
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Project,CustomUser
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
from django.shortcuts import render
from rest_framework import viewsets, status
from .models import FiatWallet
from rest_framework.views import APIView
import bcrypt 
from django.db import connection





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
# class GetUserFirstName(APIView):
#     def get(self,request,*args, **kwargs):
#         UserFirstName = CustomUser.objects.
            
    



class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notificationthings.objects.all()
    serializer_class = NotificationSerializer

    def create(self, request, *args, **kwargs):
        user_id = request.data.get('userId')
        print(user_id)
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
                'messages': messages,
            }
        )

        if not created:
            notification.product_announcement = product_announcement
            notification.insights_tips = insights_tips
            notification.special_offers = special_offers
            notification.price_alerts = price_alerts
            notification.account_activity = account_activity
            notification.messages = messages
            notification.user_id = user_id
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
        password_creation = request.data.get('password_creation')
        user_id = request.data.get('userId')

        if not password_creation:
            return Response({'error': 'Password creation field is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Hash the password before saving
        hashed_password = bcrypt.hashpw(password_creation.encode('utf-8'), bcrypt.gensalt())

        password_setting, created = Password.objects.get_or_create(
            id=user_id,
            defaults={
                'password_creation': hashed_password.decode('utf-8'),
            }
        )
        if not created:
            password_setting.password_creation = hashed_password.decode('utf-8')
            password_setting.save()

        serializer = self.get_serializer(password_setting)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        password_creation = request.data.get('password_creation')

        if password_creation:
            hashed_password = bcrypt.hashpw(password_creation.encode('utf-8'), bcrypt.gensalt())
            request.data['password_creation'] = hashed_password.decode('utf-8')

        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)

# class RepasswordViewSet(viewsets.ModelViewSet):
#     queryset = Password.objects.all()
#     serializer_class = PasswordSerializer

#     def create(self, request, *args, **kwargs):
#         retype_password = request.data.get('retype_password')

#         if not retype_password:
#             return JsonResponse({'status': 'error', 'message': 'Retype password field is required'}, status=status.HTTP_400_BAD_REQUEST)

#         try:
#             password_setting = Password.objects.get(id=54321)
#             stored_password_hash = password_setting.password_creation.encode('utf-8')
#         except Password.DoesNotExist:
#             return JsonResponse({'status': 'error', 'message': 'Original password not found'}, status=status.HTTP_404_NOT_FOUND)

#         # Hash the retype_password for comparison
#         retype_password_hash = bcrypt.hashpw(retype_password.encode('utf-8'), bcrypt.gensalt())

#         if not bcrypt.checkpw(retype_password.encode('utf-8'), stored_password_hash):
#             return JsonResponse({'status': 'password_failure', 'message': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
        

#         return JsonResponse({'status': 'success', 'message': 'Passwords match'}, status=status.HTTP_200_OK)
    
class RepasswordViewSet(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer
   

    def create(self, request, *args, **kwargs):
        user_id = request.data.get('userId')
        id = user_id
        password_creation = request.data.get('password_creation')
        retype_password = request.data.get('retype_password')

        print(type(password_creation), type(retype_password))

        # Hash the retype_password
        hashed_retype_password = bcrypt.hashpw(retype_password.encode('utf-8'), bcrypt.gensalt())

        password_setting, created = Password.objects.get_or_create(
            id=user_id,
            defaults={
                'retype_password': hashed_retype_password.decode('utf-8'),
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

        print(password_list[index] != retype_list[index], password_list[index], retype_list[index])

        
        if not retype_password:
            return JsonResponse({'status': 'error', 'message': 'Retype password field is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            password_setting = Password.objects.get(id=user_id)
            stored_password_hash = password_setting.password_creation.encode('utf-8')
        except Password.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Original password not found'}, status=status.HTTP_404_NOT_FOUND)

        # Hash the retype_password for comparison
        retype_password_hash = bcrypt.hashpw(retype_password.encode('utf-8'), bcrypt.gensalt())

        print(bcrypt.checkpw(retype_password.encode('utf-8'), stored_password_hash))

        if not bcrypt.checkpw(retype_password.encode('utf-8'), stored_password_hash):
            return JsonResponse({'status': 'password_failure', 'message': 'Passwords do not match'})

        if not created:
            password_setting.retype_password = hashed_retype_password.decode('utf-8')
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

class FetchQRCodeView(View):

    def get(self, request, *args, **kwargs):
        user_id = request.GET.get('user_id')  # Get user_id from query parameters
        if not user_id:
            return JsonResponse({'error': 'User ID is required.'}, status=400)

        qr_code = None
        email = None
        mobile_number = None

        try:
            with connection.cursor() as cursor:
                # Query to fetch the qr_code, email, and mobile number from fiat_wallet table based on user_id
                cursor.execute("""
                    SELECT qr_code, fiat_wallet_email, fiat_wallet_phone_number 
                    FROM fiat_wallet 
                    WHERE user_id = %s
                """, [user_id])
                row = cursor.fetchone()

                if row:
                    qr_code = row[0]  # Extract the QR code from the query result
                    email = row[1]   # Extract the email
                    mobile_number = row[2]  # Extract the mobile number
                else:
                    return JsonResponse({'error': 'Details not found for this user ID.'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

        return JsonResponse({'qr_code': qr_code, 'email': email, 'mobile_number': mobile_number})
class LogPassword(viewsets.ViewSet):
    
    # def list(self, request):
    #     user_id = request.data.get('userId')
    #     id = user_id
    #     with connection.cursor() as cursor:
    #         cursor.execute("SELECT * FROM app_password")
    #         rows = cursor.fetchall()
    #     print(rows)
        
    #     id_list = [row[0] for row in rows]
    #     logpassword_list = [row[1] for row in rows]
        
    #     print(id in id_list)
    #     if id in id_list:
    #         index = id_list.index(id)
    #         return JsonResponse({'status': 'User_Id_is_connected', 'message': 'Passwords do not match'})
    #     else:
    #         return JsonResponse({'status': 'Error', 'message': 'User not found'})
        
    def create(self, request):
        user_id = request.data.get('userId')
        id = user_id
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM app_password")
            rows = cursor.fetchall()
        print(rows)
        
        id_list = [row[0] for row in rows]
        logpassword_list = [row[1] for row in rows]
        
        print(id in id_list)
        if id in id_list:
            index = id_list.index(id)
            return JsonResponse({'status': 'User_Id_is_connected', 'message': 'Passwords do not match'})
        else:
            return JsonResponse({'status': 'Error', 'message': 'User not found'})


class LogPasswordLock(viewsets.ViewSet):
    
    def create(self, request):
        user_id = request.data.get('userId')
        id = user_id
        logmain_password = request.data.get('logmain_password')  # The user input password
        
        print("Input password (raw):", logmain_password)
        
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM app_password")
            rows = cursor.fetchall()  # Fetching all password records
            
        print("Fetched rows from DB:", rows)
        
        id_list = [row[0] for row in rows]  # List of IDs
        logpassword_list = [row[1] for row in rows]  # List of hashed passwords
        
        if id in id_list:
            index = id_list.index(id)  # Get the index of the user with the matching ID
            stored_password_hash = logpassword_list[index]  # Get the hashed password from the DB
            
            print(f"Stored hash from DB (for ID {id}):", stored_password_hash)
            
            # Check if the input password matches the hashed password from the DB
            if bcrypt.checkpw(logmain_password.encode('utf-8'), stored_password_hash.encode('utf-8')):
                print("Password match")
                return JsonResponse({'status': 'Password_Match', 'message': 'Password is correct'})
            else:
                print("Password does not match")
                return JsonResponse({'status': 'password_failure', 'message': 'Passwords do not match'})
        # elif len(id_list):
            
        else:
            print("User ID not found")
            return JsonResponse({'status': 'Error', 'message': 'User not found'})
        
    def list(self, request):
        user_id = request.query_params.get('userId')  
        id = user_id
        print(id)
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM app_password")
            rows = cursor.fetchall()
        print(rows)
        
        id_list = [row[0] for row in rows]
        logpassword_list = [row[1] for row in rows]
        
        print(id in id_list)
        if id in id_list:
            index = id_list.index(id)
            return JsonResponse({'status': 'User_Id_is_connected', 'message': 'Passwords do not match'})
        else:
            return JsonResponse({'status': 'Error', 'message': 'User not found'})
        
        
def fetch_crypto_wallet_table(request, user_id=None):
    with connection.cursor() as cursor:
        # If user_id is provided, filter by user_id; otherwise, fetch all records
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

        # Get column names
        columns = [col[0] for col in cursor.description]
        # Map the data to dictionaries
        data = [dict(zip(columns, row)) for row in result]

    return JsonResponse(data, safe=False)