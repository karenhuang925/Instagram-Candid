//Type Key String Literals
const LOAD_REPLIES = "/api/getRepliesByCommentId";
const CREATE_REPLY = "/api/createReply";
const UPDATE_REPLY_BY_USER = "/api/updateReply"
const DELETE_REPLY_BY_USER = "/api/deleteReply"



//Redux action creators
const loadRepliesForAComment = (allRepliesByCommentId) => {
    return {
        type: LOAD_REPLIES,
        payload: allRepliesByCommentId
    }
};

const createAReply = (newReply) => {
    return {
        type: CREATE_REPLY,
        payload: newReply
    }
};

const updateAReply = (replyEdits) => {
    return {
        type: UPDATE_REPLY_BY_USER,
        payload: replyEdits
    }
}

const deleteAReply = (replyId) => {
    return {
        type: DELETE_REPLY_BY_USER,
        payload: replyId
    }
}



//Thunk action creators

// Get all replies under the comment
export const loadRepliesByCommentId = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/replies`);
    const replies = await response.json();

    // let allRepliesForComment = {};
    // replies.Replies.forEach((reply) => {
    //     allRepliesForComment[reply.id] = reply
    // });

    // dispatch(loadRepliesForAComment(allRepliesForComment));
    dispatch(loadRepliesForAComment({id,replies}));
    return response;
}

// Create a Reply under the comment
export const createReply = (commentId, reply) => async (dispatch) => {
    const addedReply = await fetch(`/api/comments/${commentId}/replies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reply)
    });
    const newReply = await addedReply.json();

    const response = await fetch(`/api/comments/${commentId}/replies`)
    const replies = await response.json();

    let commentReplies = {};
    replies.Replies.forEach((reply) => {
        commentReplies[reply.id] = reply
    });

    dispatch(createAReply(commentReplies[newReply.id]));
    return addedReply;
}

// Edit a Reply
export const editReply = (edits, id, commentId) => async (dispatch) => {
    const editedReply = await fetch(`/api/replies/${id}`, {
        method: "PUT",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(edits)
    });
    const updateReply = await editedReply.json();

    const response = await fetch(`/api/comments/${commentId}/replies`)
    const replies = await response.json();

    let commentReplies = {};
    replies.Replies.forEach((reply) => {
        commentReplies[reply.id] = reply
    });

    dispatch(updateAReply(commentReplies[updateReply.id]));
    return response;
}

// Delete a Reply
export const deleteReply = (id) => async (dispatch) => {
    const response = await fetch(`/api/replies/${id}`, {
        method: "DELETE"
    });

    dispatch(deleteAReply(id));
    return response;
}



//Initial State Object
const initialState = {};



//Redux Reducer
const replyReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REPLIES:
            newState = {
                ...state,
                [action.payload.id]: [...action.payload.replies.Replies]
            }
            return newState;
        case CREATE_REPLY:
            if(!state[action.payload.comment_id]){
                newState = {
                    ...state,
                    [action.payload.comment_id]: [action.payload]
                }
                return newState;
            } else{
                newState = {
                    ...state,
                    [action.payload.comment_id]: [...state[action.payload.comment_id], action.payload]
                }
                return newState;
            }
        case UPDATE_REPLY_BY_USER:
            newState = {
                ...state,
                reply: {
                    ...state.reply,
                    [action.payload.id]: action.payload
                }
            }
            return newState;
        case DELETE_REPLY_BY_USER:
            newState = {
                ...state,
                reply: {
                    ...state.reply
                }
            }
            delete newState.reply[action.payload]
            return newState;
        default:
            return state;
    }

}

export default replyReducer;
