# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Motto(models.Model):
    """Mottos for the homepage"""
    text = models.CharField(max_length=30)
    
    def __str__(self):
        return self.text
