from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from .models import *
from .serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import IsAdminUser,IsAuthenticated


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
def get_all_products(request):
    prods=Product.objects.all()
    serilizer = ProductSerializer(prods ,many=True)
    return Response(serilizer.data)   

@api_view(['GET'])
def get_all_products_bycat(request,pk):
    prods=Product.objects.filter(categorie=pk)
    serilizer = ProductSerializer(prods ,many=True)
    return Response(serilizer.data)   

@api_view(['GET']) 
def get_reviews(request,pk):
    rev= Review.objects.filter(product=pk)
    seriailizer=ReviewSerializer(rev,many=True)
    return Response(seriailizer.data)

@api_view(['GET'])
def get_all_categories(request):
    cat=Categorie.objects.all()
    seializer = CAtegorieSerializer(cat,many=True)
    return Response(seializer.data)

@api_view(['POST'])
def recive_contact(request):
    data=request.data
    cont = contactMail.objects.create(
        email=data['email'],
        name=data['name'],
        massage=data['message'],
    )
    serilaizer=ContactSerializer(cont,many=False)
    return Response(serilaizer.data)

@api_view(['GET'])
def get_certif(request,code):
    certif=Certif.objects.filter(certifCode=code)
    serilizer=CertifSerializer(certif,many=True)
    return Response(serilizer.data)