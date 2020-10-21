from django.contrib import admin
# gaurantee to get custom user model 
from django.contrib.auth import get_user_model
# Register your models here.

User = get_user_model()

admin.site.register(User)

