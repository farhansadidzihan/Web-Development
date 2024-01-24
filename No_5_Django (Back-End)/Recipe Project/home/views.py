from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):

    peoples = [
        {"name": "Zihan", "age": 15},
        {"name": "Zihan", "age": 15},
        {"name": "Zihan", "age": 15},
        {"name": "Sandeep", "age": 40},
        {"name": "Sandeep", "age": 40},
        {"name": "Sandeep", "age": 40}
    ]
    
    for people in peoples:
        print(people)

    fav_tech = ["Django", "MongoDB", "MERN Stack", "Docker"]

    return render(request, "home/index.html", context={"page": "Django.py", "peoples": peoples, "technologies": fav_tech})


def contact_page(request):
    context = {"page": "About"}
    return render(request, "home/contact.html", context)


def about_page(request):
    context = {"page": "Contact"}
    return render(request, "home/about.html", context)

def success_page(request):
    print('*' * 10)
    return HttpResponse("<h2> <i> Hey, This is a Success Page </i> </h2>")