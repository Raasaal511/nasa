from django.shortcuts import render

from .models import SpaceImage
from .filters import SpaceImageFilter


def space_image_list(request):
    space_image_filter = SpaceImageFilter(request.GET, queryset=SpaceImage.objects.all())
    return render(request, 'main/index.html', {'space_image_filter': space_image_filter})
