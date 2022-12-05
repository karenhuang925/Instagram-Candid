import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import PostDetail from './PostDetail';


function PostDetailModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button onClick={() => setShowModal(true)}></button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <PostDetail />
            </Modal>
        )}
        </>
    );
}

export default PostDetailModal;
