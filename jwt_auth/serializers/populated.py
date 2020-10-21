# pylint: disable=no-name-in-module, import-error
from routes.serializers.common import RouteSerializer
from comments.serializers.common import CommentSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_routes = RouteSerializer(many=True)
    posted_comments = CommentSerializer(many=True)
    liked_routes = RouteSerializer(many=True)
