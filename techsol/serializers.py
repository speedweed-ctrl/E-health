from dataclasses import field, fields
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

#-------------------------------------------------------------------------
class Whearhouse_Serializer(ModelSerializer):
    class Meta:
        model=Whearhouse
        fields='__all__'

class Doc_info_serilizer(ModelSerializer):
    class Meta:
        model=Doc_info
        fields='__all__'

class Pharmacien_info_serilizer(ModelSerializer):
    class Meta:
        model=Pharmacien_info
        fields='__all__'

class Grossiste_info_serilizer(ModelSerializer):
    class Meta:
        model=Grociste_info
        fields='__all__'

class Pharmacie_serilizer(ModelSerializer):
    class Meta:
        model=Pharmacie
        fields='__all__'
class Whearhouse_serilizer(ModelSerializer):
    class Meta:
        model=Whearhouse
        fields='__all__'
class Drug_list_serilizer(ModelSerializer):
    class Meta:
        model=Drugs_list
        fields='__all__'

class Contact_mail_serilizer(ModelSerializer):
    class Meta:
        model=ContactMail_DPM
        fields='__all__'

class Contact_echange_serilizer(ModelSerializer):
    class Meta:
        model=Contact_echange
        fields='__all__'

class Contact_purchase_srilizer(ModelSerializer):
    class Meta:
        model=Contact_purchase
        fields='__all__'

class News_serilizer(ModelSerializer):
    class Meta:
        model=New
        fields='__all__'


    


