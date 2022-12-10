import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, loadAllCurrentUserPosts, loadAllPostsByUserId } from '../../../../../store/posts';

import "./DeletePost.css"

function DeletePost({ post }) {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadAllCurrentUserPosts());
    // }, [dispatch]);

    const deleteSpot = (e) => {
        dispatch(deletePost(post.id));
    };

    return (
        <button className='post-remove-button' onClick={deleteSpot}><div><i className="fa-solid fa-trash"></i></div></button>
    )
}

export default DeletePost;