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

// Functions
export const logInFunction = (data) => async (dispatch) => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const user = await response.json();
    dispatch(logInAction(user));
    return user;
}


export const signUpFunction = (data) => async (dispatch) => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const user = await response.json();
    dispatch(signUpAction(user));
    return user;
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
            return
        default:
            return state;
    }
}

export default userReducer;