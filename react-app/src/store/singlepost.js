//Type Key String Literals
const LOAD_A_SPOT = "/api/getSpotById"



//Redux action creators
const loadAPost = (post) => {
    return {
        type: LOAD_A_SPOT,
        payload: post
    }
}
//Thunk action creators
// Get details of a Post from an id
//Redux Reducer
export default singlePostReducer;