
from django.urls import path
from . import views

app_name='main'

urlpatterns = [
    path('parity/', views.parity, name='parity'),
    path('trends/',views.trends,name='trend') 
]
