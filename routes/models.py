from django.db import models

# Create your models here.
class Route(models.Model):
    start_end_point = models.CharField(max_length=50, unique=True)
    miles = models.PositiveIntegerField(unique=False)
    difficulty = models.CharField(max_length=50)
    image = models.CharField(max_length=200)
    stops = models.CharField(max_length=200, default='SOME STRING')

    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="created_routes", 
        on_delete=models.CASCADE
    )
    liked_by = models.ManyToManyField(
        'jwt_auth.User',
        related_name='liked_routes'
    )

    def __str__(self):
        return f'{self.start_end_point} - {self.miles}'