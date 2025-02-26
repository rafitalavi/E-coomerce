from django.db import models
from django.contrib.auth.models import User
import uuid

from django.db import models

class MasterCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class ChildCategory(models.Model):
    master_category = models.ForeignKey(
        MasterCategory, 
        on_delete=models.SET_NULL,  # Preserves related ChildCategory if MasterCategory is deleted
        related_name='child_categories', 
        null=True, blank=True
    )
    name = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.master_category.name if self.master_category else 'No Master Category'} -> {self.name}"

class Brand(models.Model):
    child_category = models.ForeignKey(
        ChildCategory, 
        on_delete=models.SET_NULL,  # Preserves related Brand if ChildCategory is deleted
        related_name='brands', 
        null=True, blank=True
    )
    name = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.child_category.name if self.child_category else 'No Child Category'} -> {self.name}"
