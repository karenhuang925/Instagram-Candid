const initialState = null
const CURRENT_SESSION = "session/current"
const LOGIN_SESSION = "session/login"
const SIGNSUP_SESSION = "session/signup"
const LOGOUT_SESSION = "session/logout"

// Actions
const sessionAction = (user) => {
    return {
        type: CURRENT_SESSION,
        user
    }
}

const logInAction = (user) => {
    return {
        type: LOGIN_SESSION,
        user
    }
}

const signUpAction = (user) => {
    return {
        type: SIGNSUP_SESSION,
        user
    }
}

const logOutAction = () => {
    return {
        type: LOGOUT_SESSION
    }
}

// Functions
export const sessionFunction = () => async (dispatch) => {
    const response = await fetch('/api/users/session');
    const responseJSON = await response.json();
    if(responseJSON?.errors) return
    dispatch(sessionAction(responseJSON));
    return responseJSON;
}

export const logInFunction = (data) => async (dispatch) => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const responseJSON = await response.json();
    dispatch(logInAction(responseJSON));
    return responseJSON;
}


export const signUpFunction = (data) => async (dispatch) => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const responseJSON = await response.json();
    dispatch(signUpAction(responseJSON));
    return responseJSON;
}

export const logOutFunction = () => async (dispatch) => {
    const response = await fetch('/api/users/logout');
    const responseJSON = await response.json();
    dispatch(logOutAction());
    return responseJSON;
}

// Reducer
function sessionReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case CURRENT_SESSION:
            newState = {
                ...action.user
            }
            return newState;
        case LOGIN_SESSION:
            newState = {
                ...action.user
            }
            return newState;
        case SIGNSUP_SESSION: 
            newState = {
                ...action.user
            }
            return newState;
        case LOGOUT_SESSION: 
            newState = initialState;
            return newState
        default:
            return state;
    }
}

export default sessionReducer;