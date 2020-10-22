# pylint: disable=no-name-in-module, import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import RouteSerializer

class PopulatedRouteSerializer(RouteSerializer):

    comments = PopulatedCommentSerializer(many=True)
    owner = NestedUserSerializer()
    # liked_by = NestedUserSerializer(many=True)

