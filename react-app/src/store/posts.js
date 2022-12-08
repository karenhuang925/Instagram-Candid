//Type Key String Literals
const LOAD_POSTS = "/api/getPosts";
const LOAD_FEED_POSTS = "/api/getPosts";
const CREATE_POST = "/api/createPost";
const UPDATE_POST_BY_USER = "/api/updatePost";
const DELETE_POST_BY_USER = "/api/deletePost";
const UPDATE_LIKES_ADD = "/api/updateLikesinPosts/Liked";
const UPDATE_LIKES_MINUS = "/api/updateLikesinPosts/Unliked";

//Redux action creators
const loadPosts = (allPosts) => {
  return {
    type: LOAD_POSTS,
    payload: allPosts,
  };
};

const loadFeedPosts = (allPosts) => {
  return {
    type: LOAD_FEED_POSTS,
    payload: allPosts,
  };
};

const createAPost = (newPost) => {
  return {
    type: CREATE_POST,
    payload: newPost,
  };
};

const updateAPost = (postEdits) => {
  return {
    type: UPDATE_POST_BY_USER,
    payload: postEdits,
  };
};

const deleteAPost = (postId) => {
  return {
    type: DELETE_POST_BY_USER,
    payload: postId,
  };
};

const addToTheLikes = (likeObject) => {
  return {
    type: UPDATE_LIKES_ADD,
    payload: likeObject,
  };
};

const minusToTheLikes = (likeObject) => {
  return {
    type: UPDATE_LIKES_MINUS,
    payload: likeObject,
  };
};

//Thunk action creators

// Get all Posts
export const loadAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");

  if (response.ok) {
    const posts = await response.json();

    let allPosts = {};
    posts.Posts.forEach((post) => {
      allPosts[post.id] = post;
    });

    dispatch(loadPosts(allPosts));
    return response;
  }
};

// Get all Posts created by the Current User
export const loadAllCurrentUserPosts = () => async (dispatch) => {
  const response = await fetch("/api/users/current/posts");
  const posts = await response.json();

  let currentUserPosts = {};
  posts.Posts.forEach((post) => {
    currentUserPosts[post.id] = post;
  });

  dispatch(loadPosts(currentUserPosts));
  return response;
};

// Get all Posts by User id
export const loadAllPostsByUserId = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/posts`);
  const posts = await response.json();

  let userPosts = {};
  posts.Posts.forEach((post) => {
    userPosts[post.id] = post;
  });

  dispatch(loadPosts(userPosts));
  return response;
};

// Get all Posts of Users Followed by Current User
export const loadAllPostsOfUsersFollowed = () => async (dispatch) => {
  const response = await fetch(`/api/users/current/following/posts`);

  const posts = await response.json();

  let userPosts = [];
  posts?.Posts?.forEach((post) => {
    userPosts.push(post);
  });

  dispatch(loadFeedPosts(userPosts));
  return response;
};

// Create a Post
export const createPost = (post) => async (dispatch) => {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const newPost = await response.json();
  dispatch(createAPost(newPost));

  return newPost;
};

// Edit a Post
export const editPost = (edits, id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(edits),
  });
  const updatePost = await response.json();

  dispatch(updateAPost(updatePost));
  return response;
};

// Delete a Post
export const deletePost = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  dispatch(deleteAPost(id));
  return response;
};

//Special Thunk Action Reducer
// EDIT POST - Adds Like to Post by the Current User
export const addTheLikeToPost = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}/likes`, {
    method: "POST",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addToTheLikes(data));
    return data;
  }
};

export const minusTheLikeToPost = (like) => async (dispatch) => {
  const { id } = like;
  const res = await fetch(`/api/likes/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      like_status: false,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(minusToTheLikes(data));
    return data;
  }
};

//Initial State Object
const initialState = {
  post: null,
};

//Redux Reducer
const postReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_FEED_POSTS:
      newState = {
        ...state,
        post: [...action.payload],
      };
      return newState;

    case LOAD_POSTS:
      newState = {
        ...state,
        post: action.payload,
      };
      return newState;

    case CREATE_POST:
      newState = {
        ...state,
        post: [...state.post, action.payload],
      };
      return newState;

    case UPDATE_POST_BY_USER:
      newState = {
        ...state,
        post: [...state.post, action.payload],
      };
      return newState;

    case UPDATE_LIKES_ADD:
      let currentPostIndex;
      let currentPost;
      let currentLikesArray;
      let editedLikesArray;

      for (let i = 0; i < state.post.length; i++) {
        currentPostIndex = i;
        currentPost = state.post[i];
        currentLikesArray = currentPost["Likes"];

        if (action.payload.post_id === currentPost.id) {
          editedLikesArray = currentLikesArray.slice();
          editedLikesArray.push(action.payload);
          break;
        }
      }

      currentLikesArray = editedLikesArray;

      currentPost["Likes"] = currentLikesArray;
      currentPost["likeStatus"] = true;
      let currentCountOfLikes = currentPost["likes"];
      currentPost["likes"] = currentCountOfLikes + 1;

      const newStatePostArray = state.post;
      newStatePostArray.splice(currentPostIndex, 1, currentPost);

      newState = {
        ...state,
        post: [
          ...newStatePostArray,
          // currentPost
        ],
      };

      return newState;

    case UPDATE_LIKES_MINUS:
      let currentIndex;
      let postToCheck;
      let currentPostLikes;
      let updatedLikesArray;

      for (let i = 0; i < state.post.length; i++) {
        currentIndex = i;
        postToCheck = state.post[i];
        currentPostLikes = postToCheck["Likes"];

        if (action.payload.post_id === postToCheck.id) {
          updatedLikesArray = currentPostLikes.filter((like) => {
            return action.payload.id !== like.id;
          });

          break;
        }
      }

      currentPostLikes = updatedLikesArray;

      postToCheck["Likes"] = currentPostLikes;
      postToCheck["likeStatus"] = false;
      let countOfLikes = postToCheck["likes"];
      postToCheck["likes"] = countOfLikes - 1;

      const updatedPostStoreArray = state.post;
      updatedPostStoreArray.splice(currentIndex, 1, postToCheck);

      newState = {
        ...state,
        post: [...updatedPostStoreArray],
      };
      return newState;

    case DELETE_POST_BY_USER:
      newState = {
        ...state,
        post: {
          ...state.post,
        },
      };
      delete newState.post[action.payload];
      return newState;

    default:
      return state;
  }
};

export default postReducer;
