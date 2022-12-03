import { csrfFetch } from './csrf';

const initialState = null
const GET_USER = "get/user"

// Actions
const getUserAction = (user) => {
    return {
        type: GET_USER,
        user
    }
}

// Functions
export const getUserFunction = (id) => async (dispatch) => {
    const response = await csrfFetch('/api/users/' + id);
    const responseJSON = await response.json();
    dispatch(getUserAction(responseJSON));
    return responseJSON;
}


// Reducer
function userReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_USER:
            newState = {
                ...action.user
            }
            return newState;
        default:
            return state;
    }
}

export default userReducer;