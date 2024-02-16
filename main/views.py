
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from .models import Game,Player
from django.contrib import messages
from  decimal import Decimal
# Create your views here.


@login_required
def parity(request):
    recent_objects = Game.objects.latest('id')
    print(recent_objects.time_difference)
    previous_object = Game.objects.filter(id__lt=recent_objects.id).order_by('-id').last()
    #recent_objects = Game.objects.order_by('-id')[:3]


    if request.method == 'POST':
        game= recent_objects
        user = request.user.profile
        print('total coins of user',user.coins)
        color_prediction = request.POST.get('color_prediction')
        number_prediction = request.POST.get('number_prediction')
        bet_value = request.POST.get('bet_value','10')
        #bet_value= request.POST['bet_value']
        print('x',color_prediction)
        print('xy',number_prediction)
        print('xyz',bet_value)
        if bet_value is not None and Decimal(bet_value) <= user.coins:
            x1=Player(game=game,user=user,
                                    color_prediction=color_prediction,
                                    number_prediction=number_prediction,
                                    bet_value=bet_value)
            
            x1.save()
            x1.user.coins = x1.user.coins - Decimal(x1.bet_value)
            print('new coins',x1.user.coins)
            x1.user.save()
            return HttpResponseRedirect('main:parity')
            #messages.info(request,f"The correct color is {x1.final_color} and {x1.final_number}")
        elif Decimal(bet_value) > user.coins:
            messages.error(request,'Balance  insufficient! You only have {} coins'.format(user.coins))
            return render(request,"parity/index.html")
        else:
            messages.info(request,'Didnt selected anything')
            return render(request,'xyz.html')
        
    return render(request,'main/parity.html',{'recent_objects':recent_objects})



@login_required
def trends(request):
    x1=Game.objects.all()
    return render(request,'main/paritytrend.html')