from django.shortcuts import render
from django.http import JsonResponse
from .products import products  # Ensure `products` is a valid list or dictionary
from rest_framework.decorators import api_view
from rest_framework.response import Response
@api_view(['GET'])
def GetRoutes(request):
    # Define the routes as a list
    routes = [
        '/api/products/',
        # Add more routes here if needed
    ]
    return Response(routes)  # Return the list of routes
@api_view(['GET'])
def GetProducts(request):
    # Return the products as a JSON response
    return Response(products)
@api_view(['GET'])
def GetProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    # Return the products as a JSON response
    return Response(product)    