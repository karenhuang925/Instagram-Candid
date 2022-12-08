import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLike } from "../../../../../../../store/likes";

import "./Likes.css"

function ViewLikes({ post }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLike(post.id))
    }, [dispatch])

    const allPostLikes = useSelector((state) => state?.likes?.like);

    return (
        <div className="likes-modal-container">
            <div className="likes-modal-title">
                Likes
            </div>
        </div>
    )
}

export default ViewLikes;