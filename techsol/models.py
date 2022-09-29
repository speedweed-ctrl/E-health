from email import header
from unicodedata import name
from xml.parsers.expat import model
from django.db import models
from django.contrib.auth.models import User


class Doc_info(models.Model):
    user=models.ForeignKey(to=User , on_delete=models.CASCADE)
    name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    phone=models.IntegerField()
    fix_phone_number=models.IntegerField()
    location=models.CharField(max_length=50)
    createdAt=models.DateField(auto_now_add=True)
    class Meta:
        ordering=('-createdAt',)

    def __str__(self):
        return str(f'{self.name} {self.last_name} info')

class Pharmacie(models.Model):
    name=models.CharField(max_length=50)
    phone1=models.IntegerField()
    phone2=models.IntegerField()
    email=models.EmailField()
    owner=models.ForeignKey(to=User , on_delete=models.CASCADE) 
    createdAt=models.DateField(auto_now_add=True)
    

    class Meta:
        ordering=('-createdAt',)
    
    def __str__(self):
        return str(self.name)

class Pharmacien_info(models.Model):
    user=models.ForeignKey(to=User , on_delete=models.CASCADE)
    name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    phone=models.IntegerField()
    fix_phone_number=models.IntegerField()
    location=models.CharField(max_length=50)
    pharmacie=models.ForeignKey(to=Pharmacie, on_delete=models.CASCADE)
    createdAt=models.DateField(auto_now_add=True)
    class Meta:
        ordering=('-createdAt',)

    def __str__(self):
        return str(f'{self.name} {self.last_name} info')

class Whearhouse(models.Model):
    owner = models.ForeignKey(to=User , on_delete=models.CASCADE)
    name=models.CharField(max_length=60 , null=True,blank=True )
    descrrption = models.CharField(max_length=250,blank=True,null=True)
    location:models.CharField(max_length=50)
    phone_number=models.IntegerField()
    email=models.EmailField()
    createdAt=models.DateField(auto_now_add=True)
    class Meta:
        ordering=('-createdAt',)
    
    def __str__(self):
        return str(self.name)

class Grociste_info(models.Model):
    user=models.ForeignKey(to=User , on_delete=models.CASCADE)
    name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    phone=models.IntegerField()
    fix_phone_number=models.IntegerField()
    location=models.CharField(max_length=50)
    whearhous=models.ForeignKey(to=Whearhouse , on_delete=models.CASCADE )
    createdAt=models.DateField(auto_now_add=True)
    class Meta:
        ordering=('-createdAt',)

    def __str__(self):
        return str(f'{self.name} {self.last_name} info')
    
vitality=(
    ('non vital','0'),
    ('vital','1'),
    ('essential','2'),
)
class Drugs_list(models.Model):
    name=models.CharField(max_length=50)
    composition=models.CharField(max_length=250)
    prix_unitaire=models.FloatField()
    code=models.CharField(max_length=9)
    inRuptuer=models.BooleanField(default=False)
    dosage=models.IntegerField()
    vitality=models.CharField(max_length=9,choices=vitality , default='vital')

    def __str__(self):
        return str(self.name)

class Drug_instocks(models.Model):
    name=models.CharField(max_length=50)
    composition=models.CharField(max_length=250)
    prix_unitaire=models.FloatField()
    code=models.CharField(max_length=9)
    inRuptuer=models.BooleanField(default=False)
    dosage=models.IntegerField()
    quantity_instock=models.IntegerField()
    User=models.ForeignKey(to=User , on_delete=models.CASCADE)
    Pharmacie=models.ForeignKey(to=Pharmacie,on_delete=models.CASCADE)
    createdAt=models.DateField(auto_now_add=True)

    class Meta:
        ordering=('-createdAt',)

    def __str__(self):
        return str(f'{self.name} in {self.Pharmacie} stock info')

  
class ContactMail_DPM(models.Model):
    email=models.EmailField()
    name=models.CharField(max_length=50)
    massage=models.CharField(max_length=250)
    createdAt=models.DateField(auto_now=True)

    class Meta:
        ordering = ('-createdAt',)

    def __str__(self):
        return str(self.name)

class Contact_echange(models.Model):
    email=models.EmailField()
    name=models.CharField(max_length=50)
    massage=models.CharField(max_length=250)
    quantity=models.IntegerField()
    createdAt=models.DateField(auto_now=True)

    class Meta:
        ordering = ('-createdAt',)

    def __str__(self):
        return str(self.name)

class News(models.Model):
    header=models.CharField(max_length=80)
    subHeader=models.CharField(max_length=80)
    content=models.TextField()
    user=models.ForeignKey(to=User,on_delete=models.PROTECT)
    is_Server=models.BooleanField( default=False)
    is_approved=models.BooleanField(default=False)







