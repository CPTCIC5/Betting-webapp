from django.urls import path
from . import views

app_name='main'

urlpatterns = [
    path('',views.parity,name='parity'),
    path('trend/',views.trends,name='trend')
]