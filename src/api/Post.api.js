import { API_V1 } from '../config/axios.config';

class PostApi {
  // createPostDTO(post) {
  //   if (!post) {
  //     throw new Error('specify post to generate dto');
  //   }

  //   const postDto = {
  //     title: post.title,
  //     content: post.content,
  //     image: post.coverImg,
  //     authorName: post.creator.name,
  //     authorPhoto: post.creator.photo,
  //     authorId: post.creatorId,
  //     // eslint-disable-next-line no-underscore-dangle
  //     id: post._id,
  //     tags: post.tags,
  //     authorBio: post.creator.bio,
  //     createdDate: new Date(post.createdAt).toDateString(),
  //     status: post.status
  //   };
  //   return { ...postDto };
  // }

  async getPostComments(postId) {
    try {
      const res = await API_V1.get(`posts/${postId}/comments`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw new Error('comments not found');
    }
  }

  async getPostLikes(postId) {
    try {
      const res = await API_V1.get(`posts/${postId}/likes`);
      console.log({ res });
      return res.data.data;
    } catch (error) {
      throw new Error('likes not found');
    }
  }

  async likePost(postId) {
    try {
      await API_V1.post(
        `posts/${postId}/likes`,
        null,
        { withCredentials: true }
      );
    } catch (error) {
      throw new Error('error liking post');
    }
  }

  async unlikePost(postId) {
    try {
      await API_V1.delete(`posts/${postId}/likes`, {
        withCredentials: true
      });
    } catch (error) {
      throw new Error('Error unliking post  ');
    }
  }

  async commentPost(postId, comment) {
    try {
      await API_V1.post(`posts/${postId}/comments`, comment, {
        withCredentials: true
      });
    } catch (error) {
      throw new Error('error creating comment');
    }
  }

  generatePostForm(postData) {
    try {
      const tags = [...new Set(postData.tags)];
      let contentShort;

      if (postData.content.length > 100) {
        contentShort = postData.content.substring(0, 100);
      }
      if (postData.content.length < 100) {
        contentShort = postData.content;
      }
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('content', postData.content);
      formData.append('contentShort', contentShort);
      formData.append('coverImg', postData.coverImg);
      formData.append('status', postData.status);
      tags.forEach((element) => {
        formData.append('tags', element);
      });
      return formData;
    } catch (error) {
      throw new Error(`error creating from data from: ${postData}`);
    }
  }

  async createPost(postData) {
    try {
      const postFormData = this.generatePostForm(postData);
      const post = await API_V1({
        method: 'post',
        url: '/posts',
        data: postFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          enctype: 'multipart/form-data'
        },
        withCredentials: true
      });
      return post;
    } catch (error) {
      throw new Error('error creating post');
    }
  }

  async getPosts(query) {
    try {
      const res = await API_V1.get(`/posts${query}`);
      return res.data;
    } catch (error) {
      throw new Error('error getting posts');
    }
  }

  async getPost(postId) {
    try {
      const res = await API_V1.get(`/posts/${postId}`, {
        withCredentials: true
      });
      return res.data;
    } catch (error) {
      throw new Error('error fetching post');
    }
  }

  async getDrafts() {
    try {
      const res = await API_V1.get('posts/drafts', { withCredentials: true });
      return res.data;
    } catch (error) {
      throw new Error('error fetching draft');
    }
  }

  async editPost(postId, postData) {
    try {
      const postFormData = this.generatePostForm(postData);
      const post = await API_V1({
        method: 'put',
        url: `/posts/${postId}`,
        data: postFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          enctype: 'multipart/form-data'
        },
        withCredentials: true
      });
      return post;
    } catch (error) {
      throw new Error('error editing  post');
    }
  }

  async deletePost(postId) {
    try {
      await API_V1.delete(`/posts/${postId}`, { withCredentials: true });
    } catch (error) {
      throw new Error('error deleting post');
    }
  }
}
export const postApi = new PostApi();
