
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from .models import Game,Player
from django.urls import reverse
from django.contrib import messages
from  decimal import Decimal
# Create your views here.


@login_required
def parity(request):
    recent_objects = Game.objects.latest('id')

    
    previous_object = Game.objects.filter(id__lt=recent_objects.id).order_by('-id').last()
    print(previous_object)
    recent_results = Game.objects.filter(name=recent_objects.name).order_by('-id')[1:6]
    #print(recent_results)
    #recent_objects = Game.objects.order_by('-id')[:3]


    if request.method == 'POST':
        game= recent_objects
        user = request.user.profile
        print('total coins of user',user.coins)
        print('post', request.POST)
        color_prediction = request.POST.get('color_prediction')
        number_prediction = request.POST.get('number_prediction')
        bet_value = request.POST.get('bet_value',10)
        #bet_value= request.POST['bet_value']
        print('x',color_prediction)
        print('xy',number_prediction)
        print('xyz',bet_value)
        if bet_value is not None and Decimal(bet_value) <= Decimal(user.coins):
            x1=Player(game=game,user=user,
                                    color_prediction=color_prediction,
                                    number_prediction=number_prediction,
                                    bet_value=bet_value)
            
            x1.save()
            x1.user.coins = x1.user.coins - Decimal(x1.bet_value)
            print('new coins',x1.user.coins)
            x1.user.save()
            return HttpResponseRedirect(reverse('main:parity'))
            #messages.info(request,f"The correct color is {x1.final_color} and {x1.final_number}")
        elif Decimal(bet_value) > user.coins:
            messages.error(request,'Balance  insufficient! You only have {} coins'.format(user.coins))
            return render(request,"main/parity.html",{'recent_objects':recent_objects,'previous_object':previous_object,'recent_results':recent_results})
        else:
            messages.info(request,'Didnt selected anything')
            return render(request,'main/parity.html',{'recent_objects':recent_objects,'previous_object':previous_object,'recent_results':recent_results})
    return render(request,'main/parity.html',{'recent_objects':recent_objects,'previous_object':previous_object,'recent_results':recent_results})



@login_required
def trends(request,game_type):
    x1=Game.objects.filter(name=game_type)
    red_filter= x1.filter(final_color='Red').count()
    green_filter= x1.filter(final_color='Green').count()
    voilet_filter=x1.filter(final_color='Violet').count()
    first_25 = x1.order_by('-created_at')[:25]
    next_25 = x1.order_by('-created_at')[25:50]
    last_25= x1.order_by('-created_at')[50:75]
    return render(request,'main/paritytrend.html',{'x1':x1,'red_filter':red_filter,'green_filter':green_filter,'voilet_filter':voilet_filter,
                                                   'first_25':first_25,'next_25':next_25,'last_25':last_25})