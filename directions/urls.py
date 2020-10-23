from django.urls import path
from .views import DirectionListView, DirectionDetailView

urlpatterns = [
    path('', DirectionListView.as_view()), 
    path('<int:pk>/', DirectionDetailView.as_view())
]
