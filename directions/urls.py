from django.urls import path
from .views import DirectionListView

urlpatterns = [
    path('', DirectionListView.as_view())
]
