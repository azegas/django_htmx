from django.shortcuts import render

# Create your views here.

from .forms import LocationForm
from .models import City

def index(request):
    form = LocationForm()
    return render(request, 'index.html', {'form': form})

def load_cities(request):
    country_id = request.GET.get('country')
    cities = City.objects.filter(country_id=country_id).order_by('name')
    return render(request, 'city_options.html', {'cities': cities})