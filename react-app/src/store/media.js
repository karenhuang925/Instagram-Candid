const initialState = null
const ADD_MEDIA = "add/media"
const DELETE_MEDIA = "delete/media"

// Actions
const addMediaAction = (media) => {
    return {
        type: ADD_MEDIA,
        media
    }
}

const deleteMediaAction = () => {
    return {
        type: DELETE_MEDIA
    }
}

// Functions
export const addMediaFunction = (data) => async (dispatch) => {
        const response = await fetch(`/api/posts/${data.post_id}/media` , {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    // dispatch(logInAction(responseJSON));
    return responseJSON;
}

export const deleteMediaFunction = (id) => async (dispatch) => {
    const response = await fetch('/api/media/' + id);
    const responseJSON = await response.json();
    dispatch(deleteMediaAction(responseJSON));
    return responseJSON;
}

// Reducer
function mediaReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case ADD_MEDIA:
            newState = {
                ...action.media
            }
            return newState;
        case DELETE_MEDIA:
            newState = initialState
            return newState;
        default:
            return state;
    }
}

export default mediaReducer;