import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './PostDetail.css'
import ImageComponent from '../Post/FeedPost/FeedPostComponents/ImageComponent'
import { loadPostById } from '../../../store/singlepost';

function PostDetail({postId}) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPostById(postId))
    }, [dispatch])

    let post = useSelector((state) => state.singlePost.post)

    if (!post) {return null;}

    return (
        <section className='modal-outer'>
            <div className='image'>
                <div className='imageComp'>
                    <ImageComponent images={post.Media} ></ImageComponent>
                </div>
            </div>
            <div className='info'>
                <div className='userinfo'>
                    <img alt='preview' src={post.Owner.previewImage} className='profile-pic'></img>
                    <div class='usernameAndLocation'>
                        <p className='username'>{post.Owner.username}</p>
                        <p>{post.location}</p>
                    </div>
                </div>
                <div className='postinfo'>
                    <div className='captionAndComments'></div>
                    <div className='actionButton'></div>
                    <div className='addComment'></div>
                </div>
            </div>
        </section>
    );
}

export default PostDetail;
