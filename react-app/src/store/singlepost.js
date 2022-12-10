//Type Key String Literals
const LOAD_A_POST = "/api/getPostById";

//Redux action creators
const loadAPost = (post) => {
  return {
    type: LOAD_A_POST,
    payload: post,
  };
};

//Thunk action creators

// Get details of a Post from an id
export const loadPostById = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`);
  const post = await response.json();

  dispatch(loadAPost(post));
  return response;
};

//Initial State Object
const initialState = {};

//Redux Reducer
const singlePostReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_A_POST:

      // let newPostRender = {
      //   ...action.payload
      // };

      // newPostRender["Likes"] = [...action.payload.Likes]
      // newPostRender["Media"] = [...action.payload.Media]
      // newPostRender["Owner"] = {...action.payload.Owner}
      // newPostRender["caption"] = 

      // state = { ...action.payload }

      newState = {
        // ...state,
        ...action.payload,
        Likes: [...action.payload.Likes],
        Media: [...action.payload.Media],
        Owner: { ...action.payload.Owner }

        // ...newPostRender
        // ...action.payload,
      };
      return newState;
    default:
      return state;
  }
};

export default singlePostReducer;
