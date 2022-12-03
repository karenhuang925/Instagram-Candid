//Type Key String Literals
const LOAD_A_SPOT = "/api/getSpotById"



//Redux action creators
const loadAPost = (post) => {
    return {
        type: LOAD_A_POST,
        payload: post
    }
}



//Thunk action creators

// Get details of a Post from an id
export const loadPostById = (id) => async (dispatch) => {
    const response = await fetch(`api/posts/${id}`);
    const post = await response.json()

    dispatch(loadAPost(post));
    return response
};



//Initial State Object
const initialState = {
    post: null
  };

//Redux Reducer
const singlePostReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_A_POST:
            newState = {
                ...state,
                post: action.payload
            }
            return newState
        default:
            return state
    }
}

export default singlePostReducer;