import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './PostDetail.css'
import ImageComponent from '../FeedPost/FeedPostComponents/ImageComponent/index'
import { loadPostById } from '../../../../store/singlepost';
import {loadCommentsByPostId} from '../../../../store/comments'

function PostDetail({postId}) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPostById(postId))
        dispatch(loadCommentsByPostId(postId))
    }, [dispatch])

    let post = useSelector((state) => state.singlePost.post)
    let allComments = useSelector((state) => state.comments.comment)


    if (!post) {return null;}
    if (!allComments) {return null;}
    console.log(allComments)
    let today = Date.parse(new Date())
    let unixTimeZero = Date.parse(post.created_at)

    let diff = today - unixTimeZero

    let diffindays = Math.floor((diff) / (24 * 3600 * 1000))
    let diffinhours = Math.floor(diff / (3600 * 1000))


    return (
        <section className='modal-outer'>
            <div className='image'>
                <div className='imageComp'>
                    <ImageComponent images={post.Media} ></ImageComponent>
                </div>
            </div>
            <div className='info'>
                <div className='userinfo'>
                    <img alt='preview' src={post.Owner.previewImage} className='detail-profile-pic'></img>
                    <div class='usernameAndLocation'>
                        <p className='username'>{post.Owner.username}</p>
                        <p className='location'>{post.location}</p>
                    </div>
                    <div><i className="fa-solid fa-ellipsis fa-1x"></i></div>
                </div>

                <div className='postinfo'>
                    <div className='captionAndComments'>
                        <div className='caption-card'>
                            <img alt='preview' src={post.Owner.previewImage} className='detail-profile-pic'></img>
                            <div>
                                <div className='usernameAndCaption'>
                                    <p className='caption-username'>{post.Owner.username}</p>
                                    <div >{post.caption}</div>
                                </div>
                                <div>{diffinhours > 23
                                    ? <div className='post-time'>{diffindays > 1 ? `${diffindays} DAYS AGO` : `1 DAY AGO`}</div>
                                    : <div className='post-time'>{diffinhours > 1 ? `${diffinhours} HOURS AGO` : `1 HOUR AGO`}</div>
                                }</div>
                            </div>
                        </div>
                        <div className='comments'>
                            {Object.values(allComments).map((comment)=>{
                                let commentunixTimeZero = Date.parse(comment.created_at)
                                let commentdiff = today - commentunixTimeZero
                                let commentdiffindays = Math.floor((commentdiff) / (24 * 3600 * 1000))
                                let commentdiffinhours = Math.floor(commentdiff / (3600 * 1000))
                                return(
                                    <div key={comment.id} className='caption-card'>
                                        <img alt='preview' src={comment.Owner.preview_image} className='detail-profile-pic'></img>
                                        <div>
                                            <div className='usernameAndCaption'>
                                                <p className='caption-username'>{comment.Owner.username}</p>
                                                <div >{comment.comment}</div>
                                            </div>
                                            <div>{diffinhours > 23
                                                ? <div className='post-time'>{diffindays > 1 ? `${commentdiffindays} DAYS AGO` : `1 DAY AGO`}</div>
                                                : <div className='post-time'>{diffinhours > 1 ? `${commentdiffinhours} HOURS AGO` : `1 HOUR AGO`}</div>
                                            }</div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                    <div className='actionButton'></div>
                    <div className='addComment'></div>
                </div>
            </div>
        </section>
    );
}

export default PostDetail;
