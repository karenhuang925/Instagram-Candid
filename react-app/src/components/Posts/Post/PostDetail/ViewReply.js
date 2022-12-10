import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

import {loadRepliesByCommentId} from '../../../../store/reply'
import './ViewReply.css'



function ViewReply({ comment, setContentType, setItemId, setReplyTo }) {
    const dispatch = useDispatch()
    const [showReply, setShowReply] = useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            }, 1000);
        }, [showReply]);

    function onClickHandler(){
        setShowReply(!showReply)
        dispatch(loadRepliesByCommentId(comment.id))
    }

    function CreateReply(value){
        setContentType('reply')
        setItemId(comment.id)
        setReplyTo(value.Owner.username)
    }

    let replies = useSelector((state) => state.replies.reply)

    return (
        <>
            {!showReply ? (
            <div className='post-time' id='viewAndHide' onClick={onClickHandler}> ----  View replies({comment.numOfReplies})</div>
            ) : (
            <section>
                <div className='post-time' id='viewAndHide' onClick={onClickHandler}> ----  Hide replies({comment.numOfReplies})</div>
                <div>
                    {loading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        replies && Object.values(replies).map((value) => {
                            console.log(value)
                            let today = Date.parse(new Date())
                            let unixTimeZero = Date.parse(value.created_at)

                            let diff = today - unixTimeZero

                            let diffindays = Math.floor((diff) / (24 * 3600 * 1000))
                            let diffinhours = Math.floor(diff / (3600 * 1000))

                                return (
                                    <div className='caption-card'>
                                        <img alt='preview' src={value.Owner.previewImage} className='detail-profile-pic'></img>
                                        <div>
                                            <div className='usernameAndCaption'>
                                                <p className='caption-username'>{value.Owner.username}</p>
                                                <div >{value.reply}</div>
                                            </div>
                                            <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                                                <div>{diffinhours > 23
                                                    ? <div className='post-time' id='bold'>{diffindays > 1 ? `${diffindays}d` : `1d`}</div>
                                                    : <div className='post-time' id='bold'>{diffinhours > 1 ? `${diffinhours}h` : `1h`}</div>
                                                }</div>
                                                <div className='post-time' id='bold' onClick={CreateReply(value)}>Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            })

                    )
                    }
                </div>
            </section>
            )
            }

        </>
    )
}

export default ViewReply;
