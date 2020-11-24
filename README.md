# London-Routes - GA Project Four 

London-Routes is a full stack application that allows Londoners to explore bike routes throughout the city. Users can browse different routes, add them to their profile and leave comments. 

![Wireframe Screenshot](./p3homepage.png)

### Goal and timeframe 

- 8 day solo project finishing with a fully functioning application.

### Technologies Used
- Python
- Django
- PostgreSQL
- React
- rest_framework
- Axios
- SASS
- Semantic UI React
- HTTP-proxy-middleware
- JSON Web Tokens
- PyJWT
- Git, and GitHub

### Process

- I spent the first chunk of time creating a wireframe and ERD, making sure I had a solid blueprint for this project. 

### Wireframe 

![Wireframe Screenshot](./frontend/src/styles/assets/screeshotp4.png)

### Backend
- I started by building out the backend using Django / PostgreSQL. 

###  Model 
Different types of models created on the backend: 
- User
- Route
- Comment
- Direction

Below is an example of an one-to-many model created or my comments. 
```
from django.db import models

class Comment(models.Model):
    text = models.TextField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    route = models.ForeignKey(
        'routes.Route',
        related_name="comments",
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="posted_comments",
        on_delete=models.CASCADE, 
    )
    def __str__(self):
        return f'Comment - {self.id} on Routes - {self.routes}'

```
