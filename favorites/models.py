from django.db import models

class Favorite(models.Model):
    route = models.ForeignKey(
        'routes.Route',
        related_name="favorites",
        on_delete=models.CASCADE
    )
    user = models.ForeignKey(
        'jwt_auth.User',
        related_name="favorite_routes",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Comment - {self.id} on Routes - {self.routes}'
