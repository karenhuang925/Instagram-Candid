import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollower } from "../../../store/followers";
import { getUserFunction } from "../../../store/userV1";

import "./ViewFollower.css"

function ViewFollower({ post }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFollower(post.id))
    }, [dispatch])

    const allFollowers = useSelector((state) => state?.likes?.Like) || ''

    if (!allPostLikes) return null

    return (
        <div className="likes-modal-container">

            <div className="likes-modal-title-card">
                <div>
                    Likes
                </div>
            </div>

            <div className="like-by-user-container">
                {!allPostLikes.length && <div className="no-likes"><span>No Current Likes</span></div>}
                {allPostLikes.map((like) => {
                    return (
                        <div className="liked-by-user-card" key={like.id}>

                            <div className="user-detail-container">
                                <div id="like-user-detail-image">
                                    {like.Owner.previewImage ? <img className='like-user-preview-image' src={like.Owner.previewImage} alt={like.id} /> : <div><i className="fa-regular fa-circle-user fa-2x"></i></div>}
                                </div>

                                <div className="user-detail-identity">
                                    <div id="like-user-username">{like.Owner.username}</div>
                                    <div id="like-user-name">{like.Owner.first_name} {like.Owner.last_name}</div>
                                </div>
                            </div>

                            <div>
                                <button className="like-follow-button">Follow</button>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ViewFollower;