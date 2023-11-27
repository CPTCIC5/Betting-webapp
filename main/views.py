
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
#from .models import Game, GameRound

# Create your views here.

@login_required
def parity(request):
    return render(request,'main/parity.html')



@login_required
def trends(request):
    return render(request,'main/paritytrend.html')



