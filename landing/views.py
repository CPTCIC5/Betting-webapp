from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'landing/index.html')

def search(request):
    return render(request,'search.html')
