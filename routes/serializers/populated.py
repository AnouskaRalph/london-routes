from ...comments.serializers.common import CommentSerializer
from ..serializers.common import RouteSerializer

class PopulatedRouteSerilaizer(RouteSerializer):
    comments = CommentSerializer(many=True)