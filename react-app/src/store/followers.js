// const CREATE_FOLLOWER = "followers/create";
const PLUS_FOLLOWER = "followers/plus";
const MINUS_FOLLOWER = "followers/minus";
const GET_FOLLOWER = "followers/followers";
const GET_FOLLOWING = "followers/following";
const GET_FOLLOWING_SUGGESTIONS = "followers/suggestions";

// export const createFollower = (follower) => {
//   return {
//     type: CREATE_FOLLOWER,
//     payload: follower,
//   };
// };

export const loadFollower = (payload) => {
  return {
    type: GET_FOLLOWER,
    payload: payload,
  };
};
export const loadFollowing = (payload) => {
  return {
    type: GET_FOLLOWING,
    payload: payload,
  };
};
export const loadSuggestion = (payload) => {
  return {
    type: GET_FOLLOWING_SUGGESTIONS,
    payload: payload,
  };
};
export const plusFollower = (payload) => {
  return {
    type: PLUS_FOLLOWER,
    payload: payload,
  };
};

export const minusFollower = (payload) => {
  return {
    type: MINUS_FOLLOWER,
    payload: payload,
  };
};

// export const fetchCreateFollower = (follower) => async (dispatch) => {
//   const { following_status } = follower;
//   const response = await fetch('api/followers', {

//   }
// }

export const fetchFollower = (user_id) => async (dispatch) => {
  const res = await fetch(`/api/users/${user_id}/followers`);
  if (res.ok) {
    const data = await res.json();
    dispatch(loadFollower(data));
    return data;
  }
};
export const fetchFollowing = (user_id) => async (dispatch) => {
  const res = await fetch(`/api/users/${user_id}/following`);
  if (res.ok) {
    const data = await res.json();
    dispatch(loadFollowing(data));
    return data;
  }
};
export const fetchSuggestion = (user_id) => async (dispatch) => {
  const res = await fetch(`/api/users/${user_id}/following/suggestions`);
  if (res.ok) {
    const data = await res.json();
    dispatch(loadFollower(data));
    return data;
  }
};
export const fetchPlusFollower = (follower) => async (dispatch) => {
  const { userId, followsUserId } = follower;
  const res = await fetch(`/api/users/${userId}/followers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      follows_user_id: followsUserId,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(plusFollower(data));
    return data;
  }
  console.error();
};

export const fetchMinusFollower = (follower) => async (dispatch) => {
  const { userId, followsUserId } = follower;
  const res = await fetch(`/api/users/${userId}/followers`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      follows_user_id: followsUserId,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(minusFollower(data));
    return data;
  }
};

const followerReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_FOLLOWER:
      newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    case GET_FOLLOWING:
      newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    case GET_FOLLOWING_SUGGESTIONS:
      newState = { ...state };
      newState.suggestions = action.payload;
      return newState;
    case PLUS_FOLLOWER:
      // newState = { ...state };
      // newState.following[action.payload.id] = action.payload;
      // return newState;
      newState = {
        ...state,
        followers: [...state.followers, action.payload],
      };
      return newState;
    case MINUS_FOLLOWER:
      // for(let i = 0; i < state.followers.length; i++){
      //   if(state.followers[i].id === action.payload.id){
      //     state.followers.splice(i, 1)
      //   }
      // }
      newState = {
        ...state,
        followers: [...state.followers],
      };
      // newState.followers[action.payload.id] = action.payload;
      delete newState.followers[action.payload];
      return newState;
    default:
      return state;
  }
};

export default followerReducer;
