from django.urls import path
from .views import *

urlpatterns = [ 
    path('login',MyTokenObtainPairView.as_view() , name='login'),
    path('register' , registerUser , name='register'),
    path('profile' , getUserProfile , name='user profile'),
    path('users',get_allUsers , name='all users'),
    path('Products', get_all_products , name='all the produsct'),
    path('Products/cat/<int:pk>', get_all_products_bycat , name='all the produsct by bategorie'),
    path('Reviews/<int:pk>',get_reviews,name='product reviews'),
    path('Categories',get_all_categories,name='all the categories'),
    path('contact',recive_contact ,name='recive mesagges'),
    path('certif/<int:code>',get_certif,name='get cerification')
]
