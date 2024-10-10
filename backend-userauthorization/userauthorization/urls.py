from django import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FetchQRCodeView, ProjectViewSet,CustomUserViewSet
from .views import fetch_crypto_wallet_table

from userauthorization import views

router = DefaultRouter()

router.register(r'projects',ProjectViewSet)
router.register(r'profile',CustomUserViewSet,basename="myProfile")
router.register(r'user', views.UserViewSet)
router.register(r'fiat_wallets', views.FiatWalletViewSet)
router.register(r'fiat_wallets_fetch', views.FiatWalletfetch, basename='fiat_wallet_fetch')



urlpatterns = [
    path('',include(router.urls)),
    path('fetch-qr-code/', FetchQRCodeView.as_view(), name='fetch_qr_code'),
    path('fetch-crypto-wallet/', views.fetch_crypto_wallet_table, name='fetch_crypto_wallet'),
    path('fetch-crypto-wallet/<str:user_id>/', views.fetch_crypto_wallet_table, name='fetch_crypto_wallet_by_user'),
    # path('profile/<pk>/', UserProfileView.as_view())
]