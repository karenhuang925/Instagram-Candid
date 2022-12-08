import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

import {loadRepliesByCommentId} from '../../../../store/reply'
import ReactLoading from 'react-loading';
import './ViewReply.css'



function ViewReply({ comment }) {
    const dispatch = useDispatch()
    const [showReply, setShowReply] = useState(false)
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     dispatch(loadRepliesByCommentId(comment.id))
    // }, [dispatch])


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            }, 2000);
        }, [showReply]);

    function onClickHandler(){
        setShowReply(!showReply)
        dispatch(loadRepliesByCommentId(comment.id))
    }

    let replies = useSelector((state) => state.replies.reply)

    return (
        <>
            {!showReply ? (
            <div className='post-time' id='bold' onClick={onClickHandler}> ----  View replies({comment.numOfReplies})</div>
            ) : (
            <section>
                <div className='post-time' id='bold' onClick={onClickHandler}> ----  Hide replies({comment.numOfReplies})</div>
                <div>
                    {loading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        replies && Object.values(replies).forEach((value) => {
                                console.log('here')
                                return (
                                    <h1>Hi</h1>
                                    // <div className='caption-card'>
                                    //     <h1>Hi</h1>
                                    //     <img alt='preview' src={value.Owner.previewImage} className='detail-profile-pic'></img>
                                    //     <div>
                                    //         <div className='usernameAndCaption'>
                                    //             <p className='caption-username'>{value.Owner.username}</p>
                                    //             <div >{value.reply}</div>
                                    //         </div>
                                    //     </div>
                                    // </div>
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
