// import practicePosts from "../data/practice-posts.json";

//Type Key String Literals
const LOAD_POSTS = "/api/getPosts"
const CREATE_POST = "/api/createPost"
const UPDATE_POST = "/api/updatePost"
const DELETE_POST = "/api/deletePost"



//Redux action creators
const loadPosts = (allPosts) => {
  return {
    type: LOAD_POSTS,
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
    type: UPDATE_POST,
    payload: postEdits
  }
}

const deleteAPost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId
  }
}




//Thunk action creators

// Get all Posts
export const loadAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");

  if (response.ok) {
    const posts = await response.json();

    let allPosts= {};
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

// Get all Posts by user id
export const loadAllPostsByUserId = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}/posts`);
  const posts = await response.json();

  let userPosts = {}
  posts.Posts.forEach(post => {
    userPosts[post.id] = post
  });

  dispatch(loadPosts(userPosts));
  return response;
}

// Get all Posts of Users Followed by Current User
export const loadAllPostsOfUsersFollowed = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/current/following/posts`);
  const posts = await response.json();

  let userPosts = {}
  posts.Posts.forEach(post => {
    userPosts[post.id] = post
  });

  dispatch(loadPosts(userPosts));
  return response;
}


// Create a Post
export const createPost = (post) => async (dispatch) => {
  const response = await fetch('/api/posts', {
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
  const post = await response.json();

  dispatch(createAPost(post));
  return response;
}


// Edit a Post
export const editPost = (post, id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  const post = await response.json();

  dispatch(updateAPost(post));
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
    case LOAD_POSTS:
      newState = {
        ...state,
        post: action.payload
      }
      return newState;
    case CREATE_POST:
      newState = {
        ...state,
        post: {
          ...state.post,
          [action.payload.id]: action.payload
        }
      };
      return newState
    case UPDATE_POST:
      newState = {
        ...state,
        post: {
          ...state.post,
          [action.payload.id]: action.payload
        }
      };
      return newState
    case DELETE_POST:
    default:
      return state;
  }
};

export default postReducer;
