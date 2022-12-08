import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTheLikeToPost, minusTheLikeToPost } from "../../../../../../store/posts";
import "./FeedPostButtons.css"

function FeedPostButtons({ post, user, wasLiked, setWasLiked}) {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(post.likeStatus)
    // let liked = useSelector(state => state.posts.post[post.id].likeStatus)

    // if(!liked){
    //     return null
    // }

    const handleClick = (e) => {
        e.preventDefault();
        setLiked(!liked)
        if (wasLiked === false) {
            setWasLiked(!wasLiked)
            return dispatch(addTheLikeToPost(post.id));
        }

        if (wasLiked === true) {
            const Likes = post.Likes
            let userLike = Likes.find((like) => {
                return like.user_id === user.id
            })
            setWasLiked(!wasLiked)
            return dispatch(minusTheLikeToPost(userLike));
        }
    }

    return (
        <>
            <div id='post-interaction-button-container'>
                <div id='interaction-button'>
                    <button className={post.likeStatus ? "LikeButtonLike" : "LikeButtonUnlike"} onClick={handleClick}><i className="fa-regular fa-heart fa-1x"></i></button>
                </div>
                <div id='interaction-button'><i className="fa-regular fa-comment fa-1x"></i></div>
                <div id='interaction-button'><i className="fa-regular fa-paper-plane fa-1x"></i></div>
            </div>

            <div id='post-interaction-button-container'>
                <div id='interaction-button'><i className="fa-regular fa-bookmark fa-1x"></i></div>
            </div>
        </>
    )
}

export default FeedPostButtons;
