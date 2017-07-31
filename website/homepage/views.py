# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from .models import Motto


def index(request):
    context = {'mottos':Motto.objects.all()}
    print(context)
    return render(request,"homepage/index.html",context)
    
def subpage(request):
    return render(request,"homepage/subpage.html")