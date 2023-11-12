from django import forms

from .models import City, Country

class LocationForm(forms.Form):
    country = forms.ModelChoiceField(queryset=Country.objects.all())
    city = forms.ModelChoiceField(queryset=City.objects.none())