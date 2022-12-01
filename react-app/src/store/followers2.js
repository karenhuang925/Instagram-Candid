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

export const fetchCreateFollower = (follower) => async (dispatch) => {
  const { following_status } = follower;
  const response = await fetch('api/followers', {

  }
}
