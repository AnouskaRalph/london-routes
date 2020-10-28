from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers.common import CommentSerializer
from .serializers.populated import PopulatedCommentSerializer
from .models import Comment

class CommentListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['owner'] = request.user.id
        comment_to_create = CommentSerializer(data=request.data)
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, _request):
        comments_list = Comment.objects.all()
        serialized_comments_list = PopulatedCommentSerializer(comments_list, many=True)
        return Response(serialized_comments_list.data, status=status.HTTP_200_OK)

class CommentDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def get_comment(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound()
    
    def get(self, _request, pk):
        comments = self.get_comments(pk=pk)
        serialized_comments = CommentSerializer(comments)
        return Response(serialized_comments.data, status=status.HTTP_200_OK)

    def is_comment_owner(self, comment , user):
        if comment.owner.id != user.id:
            raise PermissionDenied()

    def delete(self, request, pk):
        comment_to_delete = self.get_comment(pk=pk)
        self.is_comment_owner(comment_to_delete, request.user)
        comment_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
