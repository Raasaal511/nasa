import django_filters

from .models import SpaceImage


class SpaceImageFilter(django_filters.FilterSet):
    url = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = SpaceImage
        fields = ['name']
