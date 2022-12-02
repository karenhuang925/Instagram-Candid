const LOAD_MY_POSTS = "myposts/load";
const LOAD_USER_POSTS = "userposts/load";

const loadMyPosts = (posts) => {
  return {
    type: LOAD_MY_POSTS,
    payload: posts,
  };
};

const loadUserPosts = (payload) => {
  return {
    type: LOAD_USER_POSTS,
    payload,
  };
};

export const fetchMyPosts = () => async (dispatch) => {
  const res = await fetch("/api/users/current/posts");
  const posts = await res.json();

  dispatch(loadMyPosts(posts));
};

export const fetchUserPosts = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}/posts`);
  const posts = await res.json();

  dispatch(loadUserPosts(posts));
};

const postReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_MY_POSTS:
      newState = { ...state };
      const posts = action.payload.Posts;
      posts.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    case LOAD_USER_POSTS:
      newState = { ...state };
      const userPosts = action.payload.Posts;
      userPosts.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    default:
      return state;
  }
};

export default postReducer;
