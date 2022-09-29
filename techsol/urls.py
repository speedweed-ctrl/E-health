from django.urls import path
from .views import *

urlpatterns = [ 
    path('login',MyTokenObtainPairView.as_view() , name='login'),
    path('register' , registerUser , name='register'),
    path('profile' , getUserProfile , name='user profile'),
    path('users',get_allUsers , name='all users'),
    path('Repture',get_ruptered_data , name='all meds tha are not available'),
    path('News',get_news,name='all news'),
    path('News/severe',get_urgent_news, name='urgent news'),
    path('Contact',get_contact_dpm , name='get all contact mails'),
    path('Contact/echnge',get_contact_echange,name='get all exchange contact mails'),
    path('Contact/purchase',get_contact_purchase , name='get all the amials of purchasing'),


    
]
