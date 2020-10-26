from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Favorite
from .serializers.common import FavoriteSerializer
from .serializers.populated import PopulatedFavoriteSerializer
from rest_framework.exceptions import NotFound

class FavoriteListView(APIView):

    def get(self, _request):
        favorites_list = Favorite.objects.all()
        serialized_favorites_list = PopulatedFavoriteSerializer(favorites_list, many=True)
        return Response(serialized_favorites_list.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        request.data['user'] = request.user.id
        favorites_to_create = FavoriteSerializer(data=request.data)
        if favorites_to_create.is_valid():
            favorites_to_create.save()
            return Response(favorites_to_create.data, status=status.HTTP_201_CREATED)
        return Response(favorites_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class FavoriteDetailView(APIView):
    ''' Handles all requests to /favorites/favoritess-id (Get-Show, Put-Update and Delete-Delete) '''
    def get_favorites(self, pk):
        try:
            return Favorite.objects.get(pk=pk)
        except Favorite.DoesNotExist:
            raise NotFound()
    
    def get(self, _request, pk):
        favorites = self.get_favorites(pk=pk)
        serialized_favorites = FavoriteSerializer(favorites)
        return Response(serialized_favorites.data, status=status.HTTP_200_OK)
    
    # def put(self, request, pk):
    #     directions_to_update = self.get_directions(pk=pk)
    #     updated_directions = DirectionSerializer(directions_to_update, data=request.data)
    #     if updated_directions.is_valid():
    #         updated_directions.save()
    #         return Response(updated_directions.data, status=status.HTTP_202_ACCEPTED)
    #     return Response(updated_directions.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        favorites_to_delete = self.get_favorites(pk=pk)
        favorites_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)