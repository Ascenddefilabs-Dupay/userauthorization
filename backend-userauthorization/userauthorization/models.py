from django.db import models
import qrcode
from io import BytesIO
import base64
from django.core.validators import RegexValidator
from django.db.models import Max
import random

class Project(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CustomUser(models.Model):
    user_id = models.CharField(max_length=8, primary_key=True)
    user_email = models.EmailField(unique=True)
    user_first_name = models.CharField(max_length=30)
    user_middle_name = models.CharField(max_length=30, blank=True)
    user_last_name = models.CharField(max_length=30)
    user_dob = models.DateField()
    user_phone_number = models.BigIntegerField()
    user_country = models.CharField(max_length=50)
    user_city = models.CharField(max_length=50)
    user_profile_photo = models.FileField(upload_to='profile_photos/', null=True, blank=True)
    user_address_line_1 = models.CharField(max_length=255)
    user_state = models.CharField(max_length=50)
    user_pin_code = models.CharField(max_length=10)

    class Meta:
        db_table = 'users'

class Notificationthings(models.Model):
    user_id = models.CharField(max_length=255, unique=True, primary_key=True, default='dupA0005')
    product_announcement = models.BooleanField(default=True)
    insights_tips = models.BooleanField(default=True)
    special_offers = models.BooleanField(default=True)
    price_alerts = models.BooleanField(default=True)
    account_activity = models.BooleanField(default=True)
    messages = models.BooleanField(default=True)

    class Meta:
        db_table = 'notification_settings'

class Password(models.Model):
    password_creation = models.CharField(max_length=6)
    retype_password = models.CharField(max_length=6)

    class Meta:
        db_table = 'app_password'

class User(models.Model):
    id = models.CharField(max_length=20, primary_key=True, unique=True, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(
        max_length=15,
        validators=[
            RegexValidator(
                regex=r'^\+?1?\d{9,15}$',
                message="Invalid phone number format."
            )
        ],
        blank=True,
        null=True,
        unique=True
    )
    users_data_limit = models.DecimalField(
        max_digits=18,
        decimal_places=2,
        default=0,
    )

    class Meta:
        db_table = 'currency_converter_user'

class FiatWallet(models.Model):
    fiat_wallet_id = models.CharField(
        primary_key=True,
        max_length=12,
        unique=True,
        editable=False
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fiat_wallet_type = models.CharField(max_length=50)
    fiat_wallet_currency = models.CharField(max_length=10)
    fiat_wallet_address = models.CharField(
        max_length=66,
        unique=True,
        editable=False
    )
    fiat_wallet_balance = models.DecimalField(
        max_digits=18, 
        decimal_places=8, 
        default=0
    )
    fiat_wallet_created_time = models.DateTimeField(auto_now_add=True)
    fiat_wallet_updated_time = models.DateTimeField(auto_now=True)
    fiat_wallet_phone_number = models.CharField(
        max_length=15,
        validators=[
            RegexValidator(
                regex=r'^\+?1?\d{9,15}$',
                message="Invalid phone number format."
            )
        ],
        blank=True,
        null=True,
        unique=True
    )
    fiat_wallet_username = models.CharField(max_length=50, unique=True)
    qr_code = models.TextField(blank=True, null=True)

    def save(self, *args, **kwargs):
        self.fiat_wallet_currency = self.fiat_wallet_currency.upper()

        # Generate fiat_wallet_id with first letter capital and remaining characters camelCase
        if not self.fiat_wallet_id:
            max_id = FiatWallet.objects.aggregate(max_id=Max('fiat_wallet_id'))['max_id']
            if max_id is None:
                next_id_number = 1
            else:
                numeric_part = int(max_id[2:]) + 1
                next_id_number = numeric_part
            
            next_id = f"wa{next_id_number:010d}"
            camel_case_id = next_id.capitalize()  # Capitalize the first letter, the rest remain camelCase
            self.fiat_wallet_id = camel_case_id

        # Check for fiat_wallet_address
        if not self.fiat_wallet_address:
            self.fiat_wallet_address = self.generate_wallet_address()

        # Automatically assign a user if none is provided
        if not self.user_id:
            default_user = User.objects.first()  # Get the first user from the database
            if default_user is None:
                raise ValueError("No user available. Please create a user first.")
            self.user = default_user

        # Generate QR code if necessary
        self.generate_qr_code()

        super().save(*args, **kwargs)

    def generate_wallet_address(self):
        currency_prefix = self.fiat_wallet_currency[:3].upper()

        if currency_prefix in ['INR', 'USD', 'EUR']:
            return currency_prefix + ''.join(random.choices('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', k=63))
        else:
            raise ValueError("Unsupported currency type")

    def __str__(self):
        return f"{self.user.name} - {self.fiat_wallet_type}"

    def generate_qr_code(self):
        qr_data = f"{self.fiat_wallet_username}-{self.fiat_wallet_phone_number}"
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )

        qr.add_data(qr_data)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        buffer = BytesIO()
        img.save(buffer, format="PNG")
        img_str = base64.b64encode(buffer.getvalue()).decode("utf-8")
        self.qr_code = img_str

    class Meta:
        db_table = 'currency_converter_fiatwallet'