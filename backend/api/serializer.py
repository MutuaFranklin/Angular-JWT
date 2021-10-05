from .models import Profile, Review, Service
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('id', 'username', 'email' , 'password')
        
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user','profile_pic', 'gender', 'mobile','home_location', 'current_location' ,'bio','main_service', 'secondary_service_one', 'secondary_service_two' )


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'service_image','service_title', 'description' )


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id','profile', 'service', 'task_description' 'review', 'rating', 'reviewed_by','reviewed_on' )


  