# pylint: disable=no-name-in-module, import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from comments.serializers.populated import PopulatedCommentSerializer
# from directions.serializers import DirectionSerializer
from ..serializers.common import RouteSerializer

class PopulatedRouteSerializer(RouteSerializer):

    comments = PopulatedCommentSerializer(many=True)
    # directions = DirectionSerializer(many=True)
    owner = NestedUserSerializer()
    # liked_by = NestedUserSerializer(many=True)

