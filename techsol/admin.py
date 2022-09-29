from django.contrib import admin
from django.contrib.auth.models import User
from .models import *
# Register your models here.
admin.site.register(Categorie)
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(contactMail)
admin.site.register(Certif)
admin.site.register(DemandeCertif)