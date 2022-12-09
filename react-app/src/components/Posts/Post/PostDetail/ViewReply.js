import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

import {loadRepliesByCommentId} from '../../../../store/reply'


function ViewReply({ comment }) {
    const dispatch = useDispatch()
    const [showReply, setShowReply] = useState(false)

    useEffect(() => {
        dispatch(loadRepliesByCommentId(comment.id))
    }, [dispatch])

    let replies = useSelector((state) => state.replies)

    if(!replies) return null

    return (
        <>
            <div className='post-time' id='bold' onClick={() => setShowReply(true)}> ----  View replies({comment.numOfReplies})</div>
            {showReply && (
                <div></div>
            )}
        </>
    )
}

export default ViewReply;
