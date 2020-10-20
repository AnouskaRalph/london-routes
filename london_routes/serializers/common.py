from rest_framework import serializers
from ..models import London_Route

class London_RouteSerializer(serializers.ModelSerializer):

    class Meta:
        model = London_Route
        fields = ('id', 'start_end_point', 'miles', 'difficulty', 'image')