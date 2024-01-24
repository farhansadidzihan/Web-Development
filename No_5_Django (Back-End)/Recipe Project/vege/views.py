from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import *

# Create your views here.
def receipes(request):
    if request.method == "POST":
        return _extracted_from_receipes_3(request)
    quaryset = Receipe.objects.all()

    if request.GET.get('search'):
        quaryset = quaryset.filter(receipe_name_icontains = request.GET.get('search'))

    context = {"receipes": quaryset}
    return render(request, "receipes.html", context)


# TODO Rename this here and in `receipes`
def _extracted_from_receipes_3(request):
    data = request.POST

    receipe_name = data.get("receipe_name")
    receipe_description = data.get("receipe_description")
    receipe_image = request.FILES.get("receipe_image")

    Receipe.objects.create(
        receipe_name = receipe_name,
        receipe_description = receipe_description,
        receipe_image = receipe_image
    )

    # print(receipe_name, receipe_description, receipe_image)

    return redirect('/receipes/')

def update_receipe(request, id):
    quaryset = Receipe.objects.get(id = id)
    if request.method == "POST":
        return _extracted_from_update_receipe_4(request, quaryset)
    return redirect(request, "update_receipes.html", context={"receipe": quaryset})


# TODO Rename this here and in `update_receipe`
def _extracted_from_update_receipe_4(request, quaryset):
    data = request.POST

    receipe_name = data.get("receipe_name")
    receipe_description = data.get("receipe_description")
    receipe_image = request.FILES.get("receipe_image")

    quaryset.receipe_name = receipe_name
    quaryset.receipe_description = receipe_description

    if receipe_image:
        quaryset.receipe_image = receipe_image

    quaryset.save()
    return redirect("/receipes/")


def delete_receipe(request, id):
    quaryset = Receipe.objects.get(id = id)
    quaryset.delete()
    return redirect('/receipes/')
