from django.shortcuts import render,get_object_or_404
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth import authenticate,login as auth_login
from .models import User,Feedback,Profile
from django.contrib.auth.decorators import login_required

# Create your views here.

def risk_agreement(request):
    return render(request,'risk.html')

def precord(request):
    return render(request,'parityrecord.html')


def policy(request):
    return render(request,'policy.html')

def register(request):
    if request.method == 'POST':
        email=request.POST.get('email')
        phone_number = request.POST['phone_number']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        referal_code = request.POST.get('referal_code','')
        if password == confirm_password:
            if User.objects.filter(phone_number=phone_number).exists():
                messages.info(request,'Phone Number Already Registered')
                return render(request,'register.html')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email Taken')
                return render(request,'register.html')
            elif len(password) <8:
                messages.info(request,'ATLEAST 8 CHARACTER PASSWORD NEEDED')
                return render(request,'register.html')
            else:
                entry=User(email=email,phone_number=phone_number)
                entry.set_password(password)
                entry.save()
                if referal_code != '':
                    user=Profile.objects.filter(referal_code__exact=referal_code).first()
                    if not user:
                        messages.warning(request,"Invalid Referral Code")
                    else:
                        user.total_referal+=1
                        user.coins+=10
                        user.save()
                messages.success(request,'done')
                return HttpResponseRedirect(reverse('users:login'))
        else:
            messages.info(request,'Password and confirm password didn"t match')
            return render(request,'register.html')
    return render(request,'register.html')

@login_required
def profile(request,id):
    user= get_object_or_404(User,id=id)
    if request.method == 'POST' and 'title' in request.POST:
        title= request.POST.get('title')
        suggestion = request.POST.get('suggestion')
        whatsapp_num = request.POST.get('whatsapp_num')
        desc = request.POST.get('desc')
        entry = Feedback(title=title, suggestion=suggestion, whatsapp_num=whatsapp_num, desc=desc)
        entry.save()
        messages.success(request,'Response Sent!, Team will get back to you within 24 hours.')
        return HttpResponseRedirect(reverse('home:index'))
    return render(request,'profile.html',{'user':user})

def login(request):
    if request.method == 'POST':
        phone_number= request.POST.get('phone_number')
        password= request.POST.get('password')
        user = authenticate(phone_number=phone_number, password=password)
        if user is not None:
            auth_login(request, user)
            messages.success(request,'Redirected')
            return HttpResponseRedirect(reverse('main:parity'))
        else:
            messages.error(request,'Wrong Username or Password! ')
            return render(request,'login.html')
    return render(request,'login.html')


@login_required
def precord(request):
    return render(request,'parityrecord.html')