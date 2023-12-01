from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=30)
    price = models.IntegerField()
    description = models.CharField(max_length=100)
    image = models.ImageField(upload_to='menu_item/images')
    category = models.CharField(max_length=30, default='')

    def __str__(self):
        return self.name
