from django.contrib import admin
from .models import MasterCategory, ChildCategory, Brand

admin.site.register(MasterCategory)
admin.site.register(ChildCategory)
admin.site.register(Brand)
