import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../../../context/Modal";
import EditPost from "./EditPost";

// import "./ViewLikesModal.css"

function EditPostModal({ post }) {
    const [showEditPostModal, setEditPostModal] = useState(false)

    return (
        <>
            <button className='post-detail-edit-button' onClick={() => setEditPostModal(true)}><div><i class="fa-regular fa-pen-to-square"></i></div></button>
            {showEditPostModal && (
                <Modal onClose={() => setEditPostModal(false)}>
                    <EditPost post={post} onSubmit={() => setEditPostModal(false)}/>
                </Modal>
            )}
        </>
    )
}

export default EditPostModal;