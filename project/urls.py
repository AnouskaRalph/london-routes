from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/routes/', include('routes.urls')),
    path('api/auth/', include('jwt_auth.urls')), 
    path('api/comments/', include('comments.urls')), 
    path('api/directions/', include('directions.urls')), 
    path('api/favorites/', include('favorites.urls')), 

]