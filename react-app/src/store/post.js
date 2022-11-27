import practicePosts from "../data/practice-posts.json";

const DELETE_POST = "posts/deletePost";
const CREATE_POST = "posts/createPost";
const TOGGLE_LIKE = "posts/toggleLike";

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const toggleLike = (id) => ({
  type: TOGGLE_LIKE,
  payload: id,
});

const initialState = {};

practicePosts.forEach((post) => {});

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      const deletePostState = { ...state };
      delete deletePostState[action.payload];
      return deletePostState;
    case CREATE_POST:
      const createPostState = { ...state };
      createPostState[action.payload.id] = action.payload;
      return createPostState;
    case TOGGLE_LIKE:
      const toggleLikeState = { ...state };
      const toggleBoolean = toggleLikeState[action.payload].likeStatus;
      if (toggleBoolean) {
        toggleLikeState[action.payload].likeStatus = true;
      } else {
        toggleLikeState[action.payload].likeStatus = false;
      }
      return toggleLikeState;
    default:
      return state;
  }
};

export default postReducer;
