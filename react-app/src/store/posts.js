// import practicePosts from "../data/practice-posts.json";

//Type Key String Literals
const LOAD_POSTS = "/api/getPosts"
// const CREATE_POST = "/api/createPost"
// const UPDATE_POST = "/api/updatePost"
// const DELETE_POST = "/api/deletePost"



//Redux action creators
const loadPosts = (allPosts) => {
  return {
    type: LOAD_POSTS,
    payload: allPosts
  }
}



//Thunk action creators
export const loadAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");
  const posts = await response.json();

  let allPostsObj = {};
  posts.Posts.forEach(post => {
    allPostsObj[post.id] = post;
  });

  dispatch(loadPosts(allPostsObj));
  return response;
}



//Initial State
const initialState = {
  post: null
};



//Redux Reducer
const postReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_POSTS:
      newState = {
        ...state,
        post: action.payload
      }
      return newState;
    default:
      return state;
  }
};

export default postReducer;
