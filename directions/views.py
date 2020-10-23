from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Direction
from .serializers.common import DirectionSerializer
from rest_framework.exceptions import NotFound

class DirectionListView(APIView):

    def get(self, _request):
        directions_list = Direction.objects.all()
        serialized_directions_list = DirectionSerializer(directions_list, many=True)
        return Response(serialized_directions_list.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        directions_to_create = DirectionSerializer(data=request.data)
        if directions_to_create.is_valid():
            directions_to_create.save()
            return Response(directions_to_create.data, status=status.HTTP_201_CREATED)
        return Response(directions_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
class DirectionDetailView(APIView):
    ''' Handles all requests to /directions/directionss-id (Get-Show, Put-Update and Delete-Delete) '''
    def get_directions(self, pk):
        try:
            return Direction.objects.get(pk=pk)
        except Direction.DoesNotExist:
            raise NotFound()
    
    def get(self, _request, pk):
        directions = self.get_directions(pk=pk)
        serialized_directions = DirectionSerializer(directions)
        return Response(serialized_directions.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        directions_to_update = self.get_directions(pk=pk)
        updated_directions = DirectionSerializer(directions_to_update, data=request.data)
        if updated_directions.is_valid():
            updated_directions.save()
            return Response(updated_directions.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_directions.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        directions_to_delete = self.get_directions(pk=pk)
        directions_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)