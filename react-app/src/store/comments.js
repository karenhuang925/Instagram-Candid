//Type Key String Literals
const LOAD_COMMENTS = "/api/getCommentsByPostId";
const CREATE_COMMENT = "/api/createComment";
const UPDATE_COMMENT_BY_USER = "/api/updateComment";
const DELETE_COMMENT_BY_USER = "/api/deleteComment";



//Redux action creators
const loadCommentsForAPost = (allCommentsByPostId) => {
    return {
        type: LOAD_COMMENTS,
        payload: allCommentsByPostId
    }
};

const createAComment = (newComment) => {
    return {
        type: CREATE_COMMENT,
        payload: newComment
    }
};

const updateAComment = (commentEdits) => {
    return {
        type: UPDATE_COMMENT_BY_USER,
        payload: commentEdits
    }
};

const deleteAComment = (commentId) => {
    return {
        type: DELETE_COMMENT_BY_USER,
        payload: commentId
    }
};



//Thunk action creators

// Get all Comments by a Post's Id
export const loadCommentsByPostId = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}/comments`);
    const comments = await response.json();
    let allCommentsForPost = {};
    comments.Comments.forEach((comment) => {
        allCommentsForPost[comment.id] = comment
    });

    dispatch(loadCommentsForAPost(allCommentsForPost));
    return response;
}

// Create a Comment for a Post based on the Post's Id
export const createComment = (comment, postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    });

    if (response.ok) {
        const newComment = await response.json();
        dispatch(createAComment(newComment));
        return newComment;
    }
}

// Edit a Comment
export const editComment = (edits, id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(edits)
    });
    const updateComment = await response.json();

    dispatch(updateAComment(updateComment));
    return response;
}

// Delete a Comment
export const deleteComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE"
    });

    dispatch(deleteAComment(id));
    return response;
}



//Initial State Object
const initialState = {
    comment: null
};



//Redux Reducer
const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS:
            newState = {
                ...state,
                comment: action.payload
            }
            return newState;
        case CREATE_COMMENT:
            newState = {
                ...state,
                comment: {
                    ...state.comment,
                    [action.payload.id]: action.payload
                }
            }
            return newState;
        case UPDATE_COMMENT_BY_USER:
            newState = {
                ...state,
                comment: {
                    ...state.comment,
                    [action.payload.id]: action.payload
                }
            }
            return newState;
        case DELETE_COMMENT_BY_USER:
            newState = {
                ...state,
                comment: {
                    ...state.comment
                }
            }
            delete newState.comment[action.payload]
            return newState;
        default:
            return state
    }
}

export default commentReducer;
