const CREATE_FOLLOWER = "followers/create";
const PLUS_FOLLOWER = "followers/plus";
const MINUS_FOLLOWER = "followers/minus";

export const createFollower = (follower) => {
  return {
    type: CREATE_FOLLOWER,
    payload: follower,
  };
};

export const plusFollower = (id) => {
  return {
    type: PLUS_FOLLOWER,
    payload: id,
  };
};

export const minusFollower = (id) => {
  return {
    type: MINUS_FOLLOWER,
    payload: id,
  };
};

// export const fetchCreateFollower = (follower) => async (dispatch) => {
//   const { following_status } = follower;
//   const response = await fetch('api/followers', {

//   }
// }

export const fetchPlusFollower = (follower) => async (dispatch) => {
  const { user_id, follows_user_id } = follower;
  const res = await fetch(`/users/${user_id}/followers`, {
    method: "PUT",
    body: JSON.stringify({
      user_id,
      follows_user_id,
      following_status: true,
    }),
  });
  const data = await res.json();
  dispatch(editPlaylist(data));
  return data;
};

export const fetchMinusFollower = (follower) => async (dispatch) => {
  const { user_id, follows_user_id } = follower;
  const res = await fetch(`/users/${user_id}/followers`, {
    method: "PUT",
    body: JSON.stringify({
      user_id,
      follows_user_id,
      following_status: false,
    }),
  });
  const data = await res.json();
  dispatch(editPlaylist(data));
  return data;
};

const followerReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case PLUS_FOLLOWER:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case MINUS_FOLLOWER:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default followerReducer;
