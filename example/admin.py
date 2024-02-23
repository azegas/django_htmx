from django.contrib import admin

# Register your models here.

from .models import City, Country


class TestAdmin(admin.ModelAdmin):
    change_form_template = "admin/test_change_form.html"


admin.site.register(City, TestAdmin)
admin.site.register(Country)
