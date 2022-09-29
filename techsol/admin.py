from django.contrib import admin
from django.contrib.auth.models import User
from .models import *
# Register your models here.
admin.site.register(Drugs_list)
admin.site.register(New)
admin.site.register(ContactMail_DPM)
admin.site.register(Contact_echange)
admin.site.register(Contact_purchase)