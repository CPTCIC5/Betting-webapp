from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

app_name='users'

urlpatterns = [
    path('policy/',views.policy,name='policy'),
    path('orders/',views.orders,name='orders'),
    path('risk-agreement/',views.risk_agreement,name='risk-agreement'),
    path('precord/',views.precord,name='precord'),
    path('register/', views.register, name='register'),
    path('',views.profile,name='profile'),
    path('login/',views.login,name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('reset-password/',views.reset,name='reset-password')
]
