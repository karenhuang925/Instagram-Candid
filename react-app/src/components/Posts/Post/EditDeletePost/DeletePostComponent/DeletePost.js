import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, loadAllCurrentUserPosts, loadAllPostsByUserId } from '../../../../../store/posts';

function DeletePost({ post }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllCurrentUserPosts());
    }, [dispatch]);

    const deleteSpot = (e) => {
        dispatch(deletePost(post.id));
    };

    return (
        <button className='post-remove_button' onClick={deleteSpot}><i className="fa-solid fa-trash"></i></button>
    )
}

export default DeletePost;