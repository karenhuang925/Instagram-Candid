const initialState = {}
const USER_LOGIN = "user/login"
const USER_SIGNUP = "user/signup"
const USER_LOGOUT = "user/logout"

// Actions
const logInAction = (user) => {
    return {
        type: USER_LOGIN,
        user
    }
}

const signUpAction = (user) => {
    return {
        type: USER_SIGNUP,
        user
    }
}

const logOutAction = (user) => {
    return {
        type: USER_LOGOUT
    }
}

// Functions
export const logInFunction = (data) => async (dispatch) => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseJSON = await response.json();
    dispatch(logInAction(responseJSON));
    return responseJSON;
}


export const signUpFunction = (data) => async (dispatch) => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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
function userReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case USER_LOGIN:
            newState = {
                ...newState,
                ...action.user
            }
            return newState;
        case USER_SIGNUP: 
            newState = {
                ...newState,
                ...action.user
            }
            return newState;
        case USER_LOGOUT: 
            newState = initialState;
            return newState
        default:
            return state;
    }
}

export default userReducer;