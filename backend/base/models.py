import uuid
from django.db import models
from django.contrib.auth.models import User
from category.models import MasterCategory, ChildCategory, Brand

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=255,null=True, blank=True)
    master_category = models.ForeignKey(
        MasterCategory, on_delete=models.SET_NULL, null=True, blank=True
    )  # 👈 Added direct link to MasterCategory
    category = models.ForeignKey(ChildCategory, on_delete=models.SET_NULL, null=True, blank=True)
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, default=0.00,null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2,null=True, blank=True)
    offerPrice = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True,default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)

    def __str__(self):
        return self.name
