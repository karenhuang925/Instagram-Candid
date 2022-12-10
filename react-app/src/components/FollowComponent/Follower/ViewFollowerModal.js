import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../../context/Modal"
import ViewFollower from "./ViewFollower"

import "./ViewFollowerModal.css"

function ViewFollowerModal({ post, followers }) {
    const [showFollowerModal, setFollowerModal] = useState(false)

    return (
        <>
            <Link className='post-detail-likes' onClick={() => setFollowerModal(true)}>
                <span id="number-2">{Object?.keys(followers)?.length}</span>
                <span>followers</span>
            </Link>
            {showFollowerModal && (
                <Modal onClose={() => setFollowerModal(false)}>
                    <ViewFollower post={post} />
                </Modal>
            )}
        </>
    )
}

export default ViewFollowerModal;