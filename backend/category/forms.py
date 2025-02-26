from django import forms
from .models import MasterCategory, ChildCategory, Brand

class MasterCategoryForm(forms.ModelForm):
    class Meta:
        model = MasterCategory
        fields = ['name']

class ChildCategoryForm(forms.ModelForm):
    class Meta:
        model = ChildCategory
        fields = ['master_category', 'name']

class BrandForm(forms.ModelForm):
    class Meta:
        model = Brand
        fields = ['child_category', 'name']
