from django.urls import path
from .views import London_RouteListView, London_RouteDetailView

urlpatterns = [
    path('', London_RouteListView.as_view()),
    path('<int:pk>/', London_RouteDetailView.as_view())
]