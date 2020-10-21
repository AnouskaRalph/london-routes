from ...comments.serializers.common import CommentSerializer
from ..serializers.common import London_RouteSerializer

class PopulatedLondon_RouteSerilaizer(London_RouteSerializer):
    comments = CommentSerializer(many=True)