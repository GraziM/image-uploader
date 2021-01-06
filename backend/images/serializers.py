from rest_framework import serializers
from .models import Image

class ImageSerializer(serializers.ModelSerializer):
    timestamp = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Image
        fields = '__all__'