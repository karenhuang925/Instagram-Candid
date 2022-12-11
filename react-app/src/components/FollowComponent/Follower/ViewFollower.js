import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollower } from "../../../store/followers";
import { getUserFunction } from "../../../store/userV1";

import "./ViewFollower.css"

function ViewFollower({ post, user }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFollower(user?.id))
    }, [dispatch])

    const allFollowers = useSelector((state) => state?.follows?.followers) || ''

    if (!allFollowers) return null

    return (
        <div className="likes-modal-container">

            <div className="likes-modal-title-card">
                <div>
                    Followers
                </div>
            </div>

            <div className="like-by-user-container">
                {!allFollowers?.length && <div className="no-likes"><span>No Current Followers</span></div>}
                {allFollowers?.map((follower) => {
                    return (
                        <div className="liked-by-user-card" key={follower?.id}>

                            <div className="user-detail-container">
                                <div id="like-user-detail-image">
                                    {follower?.Owner?.preview_image ? <img className='like-user-preview-image' src={follower?.Owner?.preview_image} alt={follower?.id} /> : <div><i className="fa-regular fa-circle-user fa-2x"></i></div>}
                                </div>

                                <div className="user-detail-identity">
                                    <div id="like-user-username">{follower?.Owner?.username}</div>
                                    <div id="like-user-name">{follower?.Owner?.first_name} {follower?.Owner?.last_name}</div>
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