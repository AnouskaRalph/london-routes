from django.db import models

# Create your models here.
class London_Route(models.Model):
    start_end_point = models.CharField(max_length=50)
    miles = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=50)
    image = models.CharField(max_length=200)


    def __str__(self):
        return f'{self.start_end_point} - {self.miles}'