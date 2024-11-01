from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=100)
    pollution = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=100)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    inhabitants = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        blank=True,
        null=True,
    )
    growth = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "City"
        verbose_name_plural = "Cities"

    def __str__(self):
        return self.name
