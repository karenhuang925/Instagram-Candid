import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../../context/Modal"
import ViewFollower from "./ViewFollower"

import "./ViewFollowerModal.css"

function ViewFollowerModal({ post }) {
    const [showFollowerModal, setFollowerModal] = useState(false)

    return (
        <>
            <Link className='post-detail-likes' onClick={() => setFollowerModal(true)}><div>Followers</div></Link>
            {showFollowerModal && (
                <Modal onClose={() => setLikesModal(false)}>
                    <ViewFollower post={post}/>
                </Modal>
            )}
        </>
    )
}

export default ViewFollowerModal;