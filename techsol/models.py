from unicodedata import name
from django.db import models
from django.contrib.auth.models import User

class Categorie(models.Model):
    Categorie = models.CharField(max_length=40,blank=True,null=True)
    createdAt=models.DateField(auto_created=True)
    class Meta:
        ordering=('-createdAt',)

    def __str__(self):
        return str(self.Categorie)

class Product(models.Model):
    user = models.ForeignKey(to=User , on_delete=models.CASCADE)
    name=models.CharField(max_length=60 , null=True,blank=True )
    image=models.ImageField()
    categorie=models.ForeignKey(to=Categorie,on_delete=models.CASCADE)
    descrrption = models.CharField(max_length=250,blank=True,null=True)
    prix = models.FloatField()
    createdAt=models.DateField(auto_now_add=True)
    class Meta:
        ordering=('-createdAt',)
    
    def __str__(self):
        return str(self.name)

class Review(models.Model):
    product = models.ForeignKey(to=Product , on_delete=models.CASCADE)
    name = models.CharField(max_length=40,blank=True,null=True)
    email = models.EmailField()
    rating = models.IntegerField()
    review = models.CharField(max_length=250 , blank=True,null=True)
    createdAt=models.DateField(auto_now_add=True)

    class Meta:
        ordering=('-createdAt',)
    
    def __str__(self):
        return str(self.name)
    
class contactMail(models.Model):
    email=models.EmailField()
    name=models.CharField(max_length=50)
    massage=models.CharField(max_length=250)
    createdAt=models.DateField(auto_now=True)

    class Meta:
        ordering = ('-createdAt',)

    def __str__(self):
        return str(self.name)

class Certif(models.Model):
    certifNAme=models.CharField(max_length=100)
    name=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    certif=models.ImageField()
    certifCode=models.IntegerField()
    createdAt=models.DateField(auto_created=True)

    class Meta:
        ordering = ('-createdAt',)
    
    def __str__(self):
        return str(f"{self.name}  {self.lastname}`s certificate")

class DemandeCertif(models.Model):
    name=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    email=models.EmailField()
    organisation = models.CharField(max_length=50)
    gouvernorat=models.CharField(max_length=20)
    Fonction=models.CharField(max_length=50)
    project=models.CharField(max_length=50)
    phonenumber=models.IntegerField()
    message=models.CharField(max_length=250)
    createdAt=models.DateField(auto_created=True)

    class Meta:
        ordering =('-createdAt',)

    def __str__(self):
        return str(self.name)

