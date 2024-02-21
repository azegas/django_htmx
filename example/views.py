from django.shortcuts import render
from example.forms import LocationForm
from example.models import Country


def index(request):
    form = LocationForm()
    context = {
        'form': form,
    }
    return render(request, 'index.html', context)


def display_countries(request):
    countries = Country.objects.all()
    context = {
        'countries': countries,
    }
    return render(request, 'display_countries.html', context)
