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

    const allPostLikes = useSelector((state) => state?.likes?.likes);

    return (
        <div className="likes-modal-container">
            <div className="likes-modal-title">
                <div>
                    Likes
                </div>
                <div>X</div>
            </div>
            {/* {allPostLikes.map((like) => {
                return (
                    <div>
                        <div>profile picture</div>
                        <div>profile name</div>
                        <div>user name</div>
                    </div>
                )
            })} */}
        </div>
    )
}

export default ViewLikes;