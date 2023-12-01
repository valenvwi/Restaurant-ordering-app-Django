from django.shortcuts import render
from django.views.generic import ListView
from .models import MenuItem

class MenuItemListView(ListView):
    model = MenuItem
    template_name = 'menu_item.html'
    context_object_name = 'menu_item_list'
    menu_item_list = MenuItem.objects.all()
