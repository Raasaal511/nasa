from datetime import datetime

from django.db import models


class SpaceImage(models.Model):
    name = models.CharField(max_length=150)
    url = models.ImageField(upload_to='uploads/%Y/%m/%d/')

    def __str__(self):
        return self.name
