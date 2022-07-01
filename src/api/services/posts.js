import dbsApi from '../dbsApi';
import {POSTS_API} from '../apiConstants';

class Posts {
  fnGetPosts = async () => {
    try {
      return await dbsApi.get(POSTS_API.POSTS);
    } catch (error) {
      return error;
    }
  };
}

Posts.api = new Posts();
export default Posts;
