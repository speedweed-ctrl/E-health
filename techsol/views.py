from ast import Return
from signal import siginterrupt
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from .models import *
from .serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import IsAdminUser,IsAuthenticated
import json


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
#---------------------------------------------------------------------------

#----------------------------------------user views--------------------------
@api_view(['POST'])
def registerUser(request):
    data = request.data
  
    user = User.objects.create(
            
            first_name=data['first_name'],
            last_name = data['last_name'],
            username = data['username'],
            email = data['email'],
            password = make_password(data['password'])
        )
    serializer = UserSerializerWithToken(user , many =False )
    return Response(serializer.data)
    



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializers = UserSerrializer(user, many=False)
    return Response(serializers.data)
@api_view(['GET'])
@permission_classes([IsAdminUser])

def get_allUsers(request):
    user = User.objects.all()
    serializers = UserSerrializer(user, many=True)
    return Response(serializers.data)
#-----------------------------------------------------------------------------------------------------

@api_view(['GET'])
def get_ruptered_data(request):
    data=Drugs_list.objects.filter(inRuptuer=True)
    serilizer=Drug_list_serilizer(data,many=True)
    return Response(serilizer.data)

@api_view(['GET'])
def get_news(request):
    data=New.objects.filter(is_approved=True)
    serilizer=News_serilizer(data,many=True)
    return Response(serilizer.data)

@api_view(['GET'])
def get_urgent_news(request):
    data=New.objects.filter(is_Server=True)
    serilizer=News_serilizer(data,many=True)
    return Response(serilizer.data)



@api_view(['GET'])
def get_contact_dpm(request):
    data=ContactMail_DPM.objects.all()
    serilizer=Contact_mail_serilizer(data,many=True)
    return Response(serilizer.data)

@api_view(['GET'])
def get_contact_echange(request):
    data=Contact_echange.objects.all()
    serilizer=Contact_echange_serilizer(data,many=True)
    return Response(serilizer.data)

@api_view(['GET'])
def get_contact_purchase(request):
    data=Contact_purchase.objects.all()
    serilizer=Contact_purchase_srilizer(data,many=True)
    return Response(serilizer.data)


