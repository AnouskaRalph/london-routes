from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Direction
from .serializers.common import DirectionSerializer

class DirectionListView(APIView):

    def get(self, _request):
        directions_list = Direction.objects.all()
        serialized_directions_list = DirectionSerializer(directions_list, many=True)
        return Response(serialized_diretions_list.data, status=status.HTTP_200_OK)
