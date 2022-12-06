import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLike, fetchPlusLike, fetchMinusLike} from "../../../../../../store/likes";
import "./FeedPostButtons.css"

function FeedPostButtons({ post }) {
    // const dispatch = useDispatch();
    // const [likes, setLikes]= useState({})

    // useEffect(() => {
    //     dispatch(fetchLike(post.id))
    // }, [dispatch, post.id])

    // setLikes(useSelector((state) => state.likes))


    return (
        <>
            <div id='post-interaction-button-container'>
                <div id='interaction-button'>
                    <button className="LikeButtonLike"><i className="fa-regular fa-heart fa-1x"></i></button>
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
