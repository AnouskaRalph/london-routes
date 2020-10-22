from django.urls import path
from .views import RouteListView, RouteDetailView

urlpatterns = [
    path('', RouteListView.as_view()),
    path('<int:pk>/', RouteDetailView.as_view()),
#     path('<int:pk>/likes/', RouteLikeView.as_view())
# 
    ]