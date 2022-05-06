import { API_V1 } from '../config/axios.config';

class CommentAPI {
  // baseRoute = "http://localhost:5000/api/v1/comments";
  async getCommentById(commentId, query) {
    try {
      await API_V1.get(`comments/${commentId}${query}`);
    } catch (error) {
      throw new Error('error editing comment');
    }
  }

  async getComments(query) {
    try {
      const res = await API_V1.get(`comments/${query}`, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      throw new Error('error editing comment');
    }
  }

  async editComment(commentId, commentData) {
    try {
      const res = await API_V1.patch(`comments/${commentId}`, { content: commentData }, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      throw new Error('error editing comment');
    }
  }

  async deleteComment(commentId) {
    try {
      const comment = await API_V1.delete(`comments/${commentId}`, {
        withCredentials: true,
      });
      return comment;
    } catch (error) {
      throw new Error('error deleting comment');
    }
  }

  async createCommentReply(commentId, values) {
    try {
      await API_V1.post(`comments/${commentId}/replies`, values, {
        withCredentials: true,
      });
    } catch (error) {
      throw new Error('error replying to comment');
    }
  }
}
export const commentApi = new CommentAPI();
