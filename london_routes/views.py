from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .models import London_Route
from .serializers.common import London_RouteSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class London_RouteListView(APIView):
    ''' Handles all requests to /london_route  (Get-Index + Post-Create) '''
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get(self, _request):
        london_routes_list = London_Route.objects.all()
        serialized_london_routes_list = London_RouteSerializer(london_routes_list, many=True)
        return Response(serialized_london_routes_list.data, status=status.HTTP_200_OK)
    def post(self, request):
        london_routes_to_create = London_RouteSerializer(data=request.data)
        if london_routes_to_create.is_valid():
            london_routes_to_create.save()
            return Response(london_routes_to_create.data, status=status.HTTP_201_CREATED)
        return Response(london_routes_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        
class London_RouteDetailView(APIView):
    ''' Handles all requests to /london_route/london_route-id (Get-Show, Put-Update and Delete-Delete) '''
    def get_london_route(self, pk):
        try:
            return London_Route.objects.get(pk=pk)
        except London_Route.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        london_routes = self.get_london_route(pk=pk)
        serialized_london_routes = London_RouteSerializer(london_routes)
        return Response(serialized_london_routes.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        london_routes_to_update = self.get_london_route(pk=pk)
        updated_london_routes = London_RouteSerializer(london_routes_to_update, data=request.data)
        if updated_london_routes.is_valid():
            updated_london_routes.save()
            return Response(updated_london_routes.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_london_routes.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        london_routes_to_delete = self.get_london_route(pk=pk)
        london_routes_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


