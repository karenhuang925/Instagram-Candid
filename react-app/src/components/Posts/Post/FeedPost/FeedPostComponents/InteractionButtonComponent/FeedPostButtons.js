import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLike, fetchPlusLike, fetchMinusLike} from "../../../../../../store/likes";
import "./FeedPostButtons.css"

function FeedPostButtons({ post }) {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false)

    const like = dispatch(fetchLike(post.id))
    useSelector((state) => state.posts.post)

    // useEffect(() => {
    //     // if (post.likeStatus === false) {
    //     //     setLiked(false)
    //     // }
    //     // else {
    //     //     setLiked(true)
    //     // }
    //     // setLiked(!liked)
    //     dispatch(fetchLike(post.id))
    // }, [dispatch])

    const handleClick = (e) => {
        // e.preventDefault();

        setLiked(!liked)

        if (liked === false) return dispatch(fetchPlusLike(post.id));

        if(liked === true) return dispatch(fetchMinusLike(like.id));
    }

    // const [likes, setLikes]= useState({})

    // useEffect(() => {
    //     dispatch(fetchLike(post.id))
    // }, [dispatch, post.id])

    



    return (
        <>
            <div id='post-interaction-button-container'>
                <div id='interaction-button'>
                    <button className={liked ? "LikeButtonLike" : "LikeButtonUnlike"} onClick={handleClick}><i className="fa-regular fa-heart fa-1x"></i></button>
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