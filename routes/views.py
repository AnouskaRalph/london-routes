from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .models import Route
from .serializers.common import RouteSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class RouteListView(APIView):
    ''' Handles all requests to /route  (Get-Index + Post-Create) '''
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get(self, _request):
        routes_list = Route.objects.all()
        serialized_routes_list = RouteSerializer(routes_list, many=True)
        return Response(serialized_routes_list.data, status=status.HTTP_200_OK)
    def post(self, request):
        routes_to_create = RouteSerializer(data=request.data)
        if routes_to_create.is_valid():
            routes_to_create.save()
            return Response(routes_to_create.data, status=status.HTTP_201_CREATED)
        return Response(routes_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        
class RouteDetailView(APIView):
    ''' Handles all requests to /route/route-id (Get-Show, Put-Update and Delete-Delete) '''
    def get_route(self, pk):
        try:
            return Route.objects.get(pk=pk)
        except Route.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        routes = self.get_route(pk=pk)
        serialized_routes = RouteSerializer(routes)
        return Response(serialized_routes.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        routes_to_update = self.get_route(pk=pk)
        updated_routes = RouteSerializer(routes_to_update, data=request.data)
        if updated_routes.is_valid():
            updated_routes.save()
            return Response(updated_routes.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_routes.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        routes_to_delete = self.get_route(pk=pk)
        routes_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


