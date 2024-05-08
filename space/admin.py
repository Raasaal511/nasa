from django.contrib import admin
from django.utils.safestring import mark_safe
from adminsortable2.admin import SortableAdminMixin

from .models import SpaceImage


@admin.register(SpaceImage)
class SpaceImageAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('id', 'show_photo', 'name')
    ordering = ('pk',)
    list_display_links = ('name',)
    search_fields = ('name',)
    read_only_fields = ['show_photo']

    def show_photo(self, obj):
        photo = obj.url.url
        if photo:
            return mark_safe(f'<img src="{photo}" style="width: 214px; height:145px;" />')


