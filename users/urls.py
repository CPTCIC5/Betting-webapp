from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

app_name='users'

urlpatterns = [
    path('policy/',views.policy,name='policy'),
    path('risk-agreement/',views.risk_agreement,name='risk-agreement'),
    path('precord/',views.precord,name='precord'),
    path('trends/',views.precord,name='trends'),
    path('register/', views.register, name='register'),
    path('<int:id>/',views.profile,name='profile'),
    path('login/',views.login,name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
]
