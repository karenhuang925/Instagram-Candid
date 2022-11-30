const LOAD_MY_POSTS = "myposts/load";

const loadMyPosts = (posts) => {
  return {
    type: LOAD_MY_POSTS,
    payload: posts,
  };
};

export const fetchMyPosts = () => async (dispatch) => {
  const res = await fetch("/api/users/current/posts");
  const posts = await res.json();

  dispatch(loadMyPosts(posts));
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
  }
};

export default postReducer;
