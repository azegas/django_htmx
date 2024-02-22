from django.shortcuts import render
from delete.forms import LocationForm
from delete.models import Country
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt


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


@csrf_exempt # on delete I get Forbidden CSRF token missing.): /countries/19/delete/ 
@require_http_methods(['DELETE']) # does not allow to go to "/countries/15/delete/" directly to delete
def delete_country(request, id):
    Country.objects.filter(id=id).delete()
    countries = Country.objects.all()
    context = {
        "countries": countries,
    }

    return render(request, 'country_list.html', context)
