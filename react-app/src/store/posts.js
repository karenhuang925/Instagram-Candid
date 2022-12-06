//Type Key String Literals
const LOAD_POSTS = "/api/getPosts"
const LOAD_FEED_POSTS = "/api/getPosts"
const CREATE_POST = "/api/createPost"
const UPDATE_POST_BY_USER = "/api/updatePost"
const DELETE_POST_BY_USER = "/api/deletePost"



//Redux action creators
const loadPosts = (allPosts) => {
  return {
    type: LOAD_POSTS,
    payload: allPosts
  }
}

const loadFeedPosts = (allPosts) => {
  return {
    type: LOAD_FEED_POSTS,
    payload: allPosts
  }
}

const createAPost = (newPost) => {
  return {
    type: CREATE_POST,
    payload: newPost
  }
}

const updateAPost = (postEdits) => {
  return {
    type: UPDATE_POST_BY_USER,
    payload: postEdits
  }
}

const deleteAPost = (postId) => {
  return {
    type: DELETE_POST_BY_USER,
    payload: postId
  }
}




//Thunk action creators

// Get all Posts
export const loadAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");

  if (response.ok) {
    const posts = await response.json();

    let allPosts = {};
    posts.Posts.forEach(post => {
      allPosts[post.id] = post;
    });

    dispatch(loadPosts(allPosts));
    return response;
  }
}

// Get all Posts created by the Current User
export const loadAllCurrentUserPosts = () => async (dispatch) => {
  const response = await fetch("api/users/current/posts");
  const posts = await response.json();

  let currentUserPosts = {}
  posts.Posts.forEach(post => {
    currentUserPosts[post.id] = post
  });

  dispatch(loadPosts(currentUserPosts));
  return response;
}

// Get all Posts by User id
export const loadAllPostsByUserId = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/posts`);
  const posts = await response.json();

  let userPosts = {}
  posts.Posts.forEach(post => {
    userPosts[post.id] = post
  });

  dispatch(loadPosts(userPosts));
  return response;
}

// Get all Posts of Users Followed by Current User
export const loadAllPostsOfUsersFollowed = () => async (dispatch) => {
  const response = await fetch(`/api/users/current/following/posts`);
  // console.log("HERE!1", response)
  const posts = await response.json();

  // console.log("HERE!2", posts)

  let userPosts = []
  posts?.Posts?.forEach(post => {
    // console.log("HERE!3", post)
    // userPosts[post.id] = post
    userPosts.push(post)
    // console.log("HERE!4", userPosts[post.id])
  });

  // console.log("HERE!5", userPosts)

  dispatch(loadFeedPosts(userPosts));
  return response;
}

// Create a Post
export const createPost = (post) => async (dispatch) => {
  const response = await fetch('/api/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
  const newPost = await response.json();
  // dispatch(createAPost(newPost));

  return newPost;
}

// Edit a Post
export const editPost = (edits, id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(edits)
  });
  const updatePost = await response.json();

  dispatch(updateAPost(updatePost));
  return response;
}

// Delete a Post
export const deletePost = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE"
  });

  dispatch(deleteAPost(id));
  return response;
}



//Initial State Object
const initialState = {
  post: null
};



//Redux Reducer
const postReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_FEED_POSTS:
      newState = {
        ...state,
        post: action.payload
      }
      return newState;
    case LOAD_POSTS:
      newState = {
        ...state,
        post: action.payload
      }
      return newState;
    case CREATE_POST:
      newState = {
        ...state,
        post: [
          ...state.post,
          action.payload
        ]
      };
      return newState
    case UPDATE_POST_BY_USER:
      newState = {
        ...state,
        post: {
          ...state.post,
          [action.payload.id]: action.payload
        }
      };
      return newState
    case DELETE_POST_BY_USER:
      newState = {
        ...state,
        post: {
          ...state.post,
        }
      };
      delete newState.post[action.payload];
      return newState;
    default:
      return state;
  }
};

export default postReducer;
