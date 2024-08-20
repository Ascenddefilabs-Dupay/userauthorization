from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)


    def _str_(self):
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
    user_address_line_1 = models.CharField()
    # user_address_line_2 = models.CharField()
    user_state= models.CharField()
    user_pin_code=models.CharField()
    
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