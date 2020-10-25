# pylint: disable=no-name-in-module, import-error
from routes.serializers.common import RouteSerializer
from comments.serializers.common import CommentSerializer
from favorites.serializers.common import FavoriteSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_routes = RouteSerializer(many=True)
    posted_comments = CommentSerializer(many=True)
    favorite_routes = FavoriteSerializer(many=True)


