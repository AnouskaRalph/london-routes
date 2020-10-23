from django.db import models

class Direction(models.Model):
    stop_offs = models.CharField(max_length=50)
    image = models.CharField(max_length=200)
    route = models.ForeignKey(
        'routes.Route',
        related_name="directions",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Direction - {self.id} on Routes - {self.routes}'
