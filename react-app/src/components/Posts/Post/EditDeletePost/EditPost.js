import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../../../store/posts";
import { loadPostById } from "../../../../store/singlepost";
import { sessionFunction } from "../../../../store/user";

import "./EditPost.css"

function EditPost({ post, onSubmit }) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state?.session) || ""
    // if (!currentUser) return null

    useEffect(() => {
        dispatch(loadPostById(post.id))
        // dispatch(sessionFunction())
    }, [dispatch])

    const currentPost = useSelector((state) => state?.singlePost?.post) || ""
    if (!currentPost) return null



    return (
        <div className="edit-post-modal-container">

            <div className="edit-post-header-container">
                Edit info
            </div>

            <div className="edit-post-detail-container">
                <div className="edit-post-image-container">

                </div>
                <div className="edit-post-details-container">

                    <div className="user-detail-container">
                        <div id="edit-post-user-detail-image">
                            {currentUser.preview_image ? <img className='edit-post-user-preview-image' src={currentUser.preview_image} alt={currentUser.id} /> : <div><i className="fa-regular fa-circle-user fa-2x"></i></div>}
                        </div>

                        <div className="edit-post-detail-identity">
                            <div id="edit-post-user-username">{currentUser.username}</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EditPost