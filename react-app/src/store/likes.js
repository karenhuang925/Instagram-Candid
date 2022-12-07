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

export const fetchLike = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`);
    if (res.ok){
        const data = await res.json();
        dispatch(loadLikes(data));
        return data;
    }
};

export const fetchPlusLike = ({postId}) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: "POST",
    });
    if (res.ok){
        const data = await res.json();
        dispatch(plusLike(data));
        return data;
    }
};

export const fetchMinusLike = (like) => async (dispatch) => {
    const { id } = like;
    const res = await fetch(`/api/likes/${id}`, {
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
        case GET_LIKE:
        newState = {
            ...state,
            like: action.payload
        }
        return newState;
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
