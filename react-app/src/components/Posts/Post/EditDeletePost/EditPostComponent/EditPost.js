import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { editPost, loadAllPostsOfUsersFollowed } from "../../../../../store/posts"
import { loadPostById } from "../../../../../store/singlepost";
import { sessionFunction } from "../../../../../store/user"


import ImageComponent from "../../FeedPost/FeedPostComponents/ImageComponent";

import "./EditPost.css"

function EditPost({ post, onSubmit }) {
    const dispatch = useDispatch();
    // const currentPost = useSelector((state) => state.singlePost.post, shallowEqual) || ""


    useEffect(() => {
        console.log(post?.id)
        dispatch(loadPostById(post?.id))
        // dispatch(sessionFunction())
    }, [dispatch])

    const currentUser = useSelector((state) => state?.session) || ""
    const currentPost = useSelector((state) => state?.singlePost) || ""

    const [caption, setCaption] = useState(currentPost?.caption)
    const [location, setLocation] = useState(currentPost?.location)
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        let postEdit = {
            caption,
            location
        }

        setErrors([])

        // return dispatch(editPost(postEdit, currentPost.id)).then(dispatch(loadAllPostsOfUsersFollowed()))
        return dispatch(editPost(postEdit, currentPost?.id)).
            then(() => {
                dispatch(loadPostById(currentPost?.id));
                setCaption('');
                setLocation('')
                onSubmit();
            })
            // .catch (async (res) =>{
            //     const data = await res.json;
            //     if (data && data.errors) {
            //         setErrors(data.errors)
            //     }
            //     else {
            //         setErrors([data.message])
            //     }
            // })
        // dispatch(editPost(postEdit))
        // return dispatch(loadPostById(currentPost.id))
    }


    if (!currentPost) return null
    // if (!post) return null


    return (
        <div className="edit-post-modal-container">

            <div className="edit-post-header-container">
                Edit info
            </div>

            <div className="edit-post-detail-container">
                <div className="edit-post-image-outer">
                    <div className="edit-post-image-container">
                        <ImageComponent images={currentPost?.Media}></ImageComponent>
                    </div>
                </div>

                <div className="edit-post-details-container">

                    <div className="user-detail-container">
                        <div id="edit-post-user-detail-image">
                            {currentUser?.preview_image ? <img className='edit-post-user-preview-image' src={currentUser?.preview_image} alt={currentUser?.id} /> : <div><i className="fa-regular fa-circle-user fa-2x"></i></div>}
                        </div>

                        <div className="edit-post-detail-identity">
                            <div id="edit-post-user-username">{currentUser?.username}</div>
                        </div>
                    </div>

                    <form className="edit-post-form" onSubmit={handleSubmit}>

                        <label className="edit-post-label">
                            <div id="edit-post-attribute">
                                Caption
                            </div>
                            <input
                                id="edit-post-attribute"
                                type="text"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                // placeholder={currentPost?.caption}
                            />
                        </label>

                        <label className="edit-post-label">
                            <div id="edit-post-attribute">
                                Location
                            </div>
                            <input
                                id="edit-post-attribute"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                // placeholder={currentPost?.location}
                            />
                        </label>

                        <button className='edit-post-form-button' type="submit">Done</button>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default EditPost