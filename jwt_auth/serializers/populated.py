# pylint: disable=no-name-in-module, import-error
from routes.serializers.populated import PopulatedRouteSerializer
from comments.serializers.common import CommentSerializer
from favorites.serializers.populated import PopulatedFavoriteSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_routes = PopulatedRouteSerializer(many=True)
    posted_comments = CommentSerializer(many=True)
    favorite_routes = PopulatedFavoriteSerializer(many=True)


