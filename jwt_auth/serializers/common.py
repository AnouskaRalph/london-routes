from rest_framework import serializers
from django.contrib.auth import get_user_model
# password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError


User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
        # check passwords match and then hash the passwords
    password = serializers.CharField(write_only=True)
        # never include password on outgoing data
    password_confirmation = serializers.CharField(write_only=True)
        # custom validation. Check incoming data and remove password frm it, check it matches and hash and reattach the hashed version and send on
    def validate(self, data):
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')
        if password != password_confirmation:
            raise ValidationError(message='Password Confirmation does not match')
        # try:
        #     password_validation.validate_password(password=password)
        # except ValidationError as err:
        #     raise ValidationError({'password': err.messages})
        data['password'] = make_password(password)
        return data
        # will only return data if it can pass these validations. 


    class Meta:
        model = User
        fields = '__all__'