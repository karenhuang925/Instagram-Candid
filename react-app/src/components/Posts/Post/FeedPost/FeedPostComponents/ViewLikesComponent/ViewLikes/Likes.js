import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLike } from "../../../../../../../store/likes";
import { getUserFunction } from "../../../../../../../store/userV1";

import "./Likes.css"

function ViewLikes({ post }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLike(post.id))
    }, [dispatch])

    const allPostLikes = useSelector((state) => state?.likes?.Like) || ''

    if (!allPostLikes) return null

    // console.log("WHAT IS THIS?", allPostLikes)

    // let liked_by_users_id = [];
    // allPostLikes.forEach((like) => {
    //     return liked_by_users_id.push(like.user_id)
    // });

    // console.log("USER IDs", liked_by_users_id)

    // const liked_by_users = []
    // liked_by_user_id.forEach((user_id) => {
    //     (async => {
    //         await dispatch(getUserFunction(user_id))
    //         return liked_by_user.push()
    //     }) ()
    //     // dispatch(getUserFunction(user_id))
    //     // return liked_by_user.push(useSelector((state) => state?.user))
    // })

    // liked_by_users_id.forEach((user_id) => {
    //     // liked_by_user.push(dispatch(getUserFunction(user_id)))
    //     let liked_by_user;
    //     dispatch(getUserFunction(user_id))
    //     liked_by_user = useSelector((state) => state?.user)
    //     return liked_by_users.push(liked_by_user)
    // })


    // console.log("USERS THAT LIKED POST", liked_by_users)

    // useEffect(() => {
    //     liked_by_users_id.forEach((user_id) => {
    //         // let liked_by_user;
    //         dispatch(getUserFunction(user_id))
    //         // liked_by_user = useSelector((state) => state?.user)
    //         // return liked_by_users.push(liked_by_user)
    //     })
    // }, [user_id])

    // let liked_by_user = useSelector((state) => state?.user)


    // const allPostLikes = useSelector((state) => Object.values(state?.likes));



    return (
        <div className="likes-modal-container">

            <div className="likes-modal-title-card">
                <div>
                    Likes
                </div>
            </div>

            <div className="like-by-user-container">
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

export default ViewLikes;