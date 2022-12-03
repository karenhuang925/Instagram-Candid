// const CREATE_FOLLOWER = "followers/create";
const GET_LIKE = "likes/get"
const PLUS_LIKE = "likes/create";
const MINUS_LIKE = "likes/minus";

export const loadLikes = (payload) => {
    return {
        type: GET_LIKE,
        payload: payload,
    };
};

export const plusLike = (payload) => {
    return {
        type: PLUS_LIKE,
        payload: payload,
    };
};

export const minusLike = (payload) => {
    return {
        type: MINUS_LIKE,
        payload: payload,
    };
};

export const fetchLike = ({postId}) => async (dispatch) => {
    const res = await fetch(`/users/${postId}/followers`);
    if (res.ok){
        const data = await res.json();
        dispatch(loadLikes(data));
        return data;
    }
};

export const fetchPlusLike = (like) => async (dispatch) => {
    const { user_id, post_id } = like;
    const res = await fetch(`/posts/${post_id}/likes`, {
        method: "POST",
        body: JSON.stringify({
        user_id,
        post_id,
        }),
    });
    if (res.ok){
        const data = await res.json();
        dispatch(plusLike(data));
        return data;
    }
};

export const fetchMinusFollower = (like) => async (dispatch) => {
    const { id } = like;
    const res = await fetch(`/likes/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            like_status: false
        }),
    });
    if (res.ok){
        const data = await res.json();
        dispatch(minusLike(data));
        return data;
    }
};

const likeReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_Like:
        newState = {
            ...state,
            like: action.payload
        }
        case PLUS_LIKE:
        newState = { ...state };
        newState[action.payload.id] = action.payload;
        return newState;
        case MINUS_LIKE:
        newState = { ...state };
        newState[action.payload.id] = action.payload;
        return newState;
        default:
        return state;
    }
};

export default likeReducer;
