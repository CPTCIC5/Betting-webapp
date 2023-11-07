from django.urls import path
from . import views

app_name='users'

urlpatterns = [
    path('policy/',views.policy,name='policy'),
    path('orders/',views.orders,name='orders'),
    path('risk-agreement/',views.risk_agreement,name='risk-agreement'),
    path('register/', views.register, name='register'),
    path('',views.profile,name='profile'),
    path('login/',views.login,name='login'),
    path('logout/',views.logout,name='logout'),
    path('reset-password/',views.reset,name='reset-password')
]
