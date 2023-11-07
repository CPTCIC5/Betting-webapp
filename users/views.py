from django.shortcuts import render
from django.contrib.auth import logout
from django.contrib import messages

# Create your views here.

def risk_agreement(request):
    return render(request,'risk.html')

def orders(request):
    return render(request,'orders.html')

def policy(request):
    return render(request,'policy.html')

def register(request):
    return render(request,'register.html')

def profile(request):
    return render(request,'profile.html')

def login(request):
    return render(request,'login.html')

def logout(request):
    logout()
    messages.info(request,'Logged out')
    pass

def reset():
    pass