from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import SerializerMethodField , ModelSerializer
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken,Token

class UserSerrializer(ModelSerializer):

    first_name = SerializerMethodField(read_only=True)
    last_name = SerializerMethodField(read_only=True)
    _id = SerializerMethodField(read_only=True)
    isAdmin = SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['_id', 'first_name', 'last_name','username', 'email',   'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get__id(self, obj):
        return obj.id

    def get_first_name(slef, obj):
        first_name = obj.first_name
        if first_name == '':
            first_name = obj.email
        return first_name
    
    def get_last_name(slef, obj):
        last_name = obj.last_name
        if last_name == '':
            last_name = 'unnamed'
        return last_name


class UserSerializerWithToken(UserSerrializer):
    token = SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['_id', 'username',  'isAdmin' ,'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
class ProductSerializer(ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'

class ReviewSerializer(ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'

class CAtegorieSerializer(ModelSerializer):
    class Meta:
        model=Categorie
        fields='__all__'
    
class ContactSerializer(ModelSerializer):
    class Meta:
        model=contactMail
        fields = '__all__'

class CertifSerializer(ModelSerializer):
    class Meta:
        model=Certif
        fields='__all__'

class DemandeSerializer(ModelSerializer):
    class Meta:
        model=DemandeCertif
        fields='__all__'