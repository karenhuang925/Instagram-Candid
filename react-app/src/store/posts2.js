const LOAD_MY_POSTS = "myposts/load";
const LOAD_USER_POSTS = "userposts/load";

const loadMyPosts = (posts) => {
  return {
    type: LOAD_MY_POSTS,
    payload: posts,
  };
};

const loadUserPosts = () => {
  return {
    type: LOAD_USER_POSTS,
    payload: posts,
  };
};
//fix
export const fetchMyPosts = () => async (dispatch) => {
  const res = await fetch("/api/users/current/posts");
  const posts = await res.json();

  dispatch(loadMyPosts(posts));
};

export const fetchUserPosts = () => async (dispatch) => {
  const res = await fetch("/api/users/current/posts");
  const posts = await res.json();

  dispatch(loadUserPosts(posts));
};
//fix
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
    //fix
    default:
      return state;
  }
};

export default postReducer;
