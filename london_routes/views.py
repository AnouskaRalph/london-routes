from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF

from .models import London_Route
from .serializers.common import London_RouteSerializer # get the BookSerializer


# Create your views here.
class ListView(APIView): # extend the APIView

    def get(self, _request):
        london_routes = London_Route.objects.all() # get all the books
        serializer = London_RouteSerializer(london_routes, many=True)

        return Response(serializer.data) # send the JSON to the client


class DetailView(APIView): # extend the APIView

    def get(self, _request, pk):
        london_route = London_Route.objects.get(pk=pk) # get a book by id (pk means primary key)
        serializer = London_RouteSerializer(london_route)

        return Response(serializer.data) # send the JSON to the client