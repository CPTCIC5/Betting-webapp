from django.shortcuts import render,get_object_or_404
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth import authenticate,login as auth_login
from .models import User
from django.contrib.auth.decorators import login_required

# Create your views here.

def risk_agreement(request):
    return render(request,'risk.html')

def precord(request):
    return render(request,'parityrecord.html')

def orders(request):
    return render(request,'orders.html')

def policy(request):
    return render(request,'policy.html')

def register(request):
    if request.method == 'POST':
        phone_number = request.POST.get('phone_number')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        if password == confirm_password:
            if User.objects.filter(phone_number=phone_number).exists():
                messages.info(request,'Phone Number Already Registered')
                return render(request,'register.html')
            elif len(password) <8:
                messages.info(request,'ATLEAST 8 CHARACTER PASSWORD NEEDED')
                return render(request,'register.html')
            else:
                entry=User.objects.create_user(phone_number=phone_number,password=password)
                entry.save()
                messages.success(request,'done')
                return HttpResponseRedirect(reverse('users:login'))
        else:
            messages.info(request,'Password and confirm password didn"t match')
            return render(request,'register.html')
    return render(request,'register.html')

@login_required
def profile(request,pk):
    user= get_object_or_404(User,pk=pk)
    return render(request,'profile.html',{'user':user})

def login(request):
    if request.method == 'POST':
        phone_number= request.POST.get('phone_number')
        password= request.POST.get('password')
        user = authenticate(phone_number=phone_number, password=password)
        if user is not None:
            auth_login(request, user)
            messages.success(request,'Message')
            return HttpResponseRedirect(reverse('main:parity'))
        else:
            messages.error(request,'Wrong Username or Password! ')
            return render(request,'login.html')
    return render(request,'login.html')


def reset():
    pass