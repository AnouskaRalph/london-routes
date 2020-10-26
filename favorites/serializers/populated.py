
from routes.serializers.populated import PopulatedRouteSerializer
from ..serializers.common import FavoriteSerializer

class PopulatedFavoriteSerializer(FavoriteSerializer):
    route = PopulatedRouteSerializer()
    
