import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowing } from "../../../store/followers";
import { getUserFunction } from "../../../store/userV1";

import "./ViewFollowing.css"

function ViewFollowing({ post, user }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFollowing(user?.id))
    }, [dispatch])

    const allFollowing = useSelector((state) => state?.follows?.following) || ''

    if (!allFollowing) return null

    return (
        <div className="likes-modal-container">

            <div className="likes-modal-title-card">
                <div>
                    Following
                </div>
            </div>

            <div className="like-by-user-container">
                {!allFollowing?.length && <div className="no-likes"><span>No Current Following</span></div>}
                {allFollowing?.map((follows) => {
                    return (
                        <div className="liked-by-user-card" key={follows?.id}>

                            <div className="user-detail-container">
                                <div id="like-user-detail-image">
                                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/profile/${follows?.Owner?.id}`} exact={true} activeClassName='active'>
                                        {follows?.Owner?.preview_image ? <img className='like-user-preview-image' src={follows?.Owner?.preview_image} alt={follows?.id} /> : <div><i className="fa-regular fa-circle-user fa-2x"></i></div>}
                                    </NavLink>
                                </div>

                                <div className="user-detail-identity">
                                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/profile/${follows?.Owner?.id}`} exact={true} activeClassName='active'>
                                        <div id="like-user-username">{follows?.Owner?.username}</div>
                                    </NavLink>
                                    <div id="like-user-name">{follows?.Owner?.first_name} {follows?.Owner?.last_name}</div>
                                </div>
                            </div>

                            {/* <div>
                                <button className="like-follow-button">Unfollow</button>
                            </div> */}

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ViewFollowing;