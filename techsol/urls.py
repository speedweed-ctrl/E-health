from django.urls import path
from .views import *

urlpatterns = [ 
    path('login',MyTokenObtainPairView.as_view() , name='login'),
    path('register' , registerUser , name='register'),
    path('profile' , getUserProfile , name='user profile'),
    path('users',get_allUsers , name='all users'),
    
]
