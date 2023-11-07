from django.shortcuts import render

# Create your views here.
def parity(request):
    return render(request,'main/parity.html')

def trends(request):
    return render(request,'main/paritytrend.html')