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
export const addMediaFunction = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}/media`);
    const responseJSON = await response.json();
    dispatch(addMediaAction(responseJSON));
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
                ...media
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