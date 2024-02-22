from django import forms
from example.models import City, Country
from django.contrib.auth.models import User


class LocationForm(forms.Form):
    countries = forms.ModelChoiceField(queryset=Country.objects.all())
    cities = forms.ModelChoiceField(queryset=City.objects.all())
    users = forms.ModelChoiceField(queryset=User.objects.all())
