import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../../../../../context/Modal";
import ViewLikes from "./ViewLikes"

import "./ViewLikesModal.css"

function EditPostModal({ post }) {
    const [showLikesModal, setLikesModal] = useState(false)

    return (
        <>
            <Link className='post-detail-likes' onClick={() => setLikesModal(true)}><div>{post.likes} {post.likes == 1 ? 'like' : 'likes'}</div></Link>
            {showLikesModal && (
                <Modal onClose={() => setLikesModal(false)}>
                    <EditPost post={post}/>
                </Modal>
            )}
        </>
    )
}

export default EditPostModal;