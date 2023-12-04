from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import MenuItem

class MenuItemListView(ListView):
    model = MenuItem
    template_name = 'menu.html'
    context_object_name = 'menu_item_list'
    menu_item_list = MenuItem.objects.all()


class MenuItemDetailView(DetailView):
    model = MenuItem
    template_name = 'menu_item_detail.html'
    context_object_name = 'menu_item'
#  hx-post="{% url 'add_to_cart' menu_item.id %}"
