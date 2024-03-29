import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import './CommentReplyActionModal.css'
import {deleteComment} from '../../store/comments'
import {loadAllPostsOfUsersFollowed} from '../../store/posts'

function CommentReplyActionModal({ item, aciontType, setActionType, setItemId, setContentType }) {
    const dispatch = useDispatch()
    const [showActionModal, setActionModal] = useState(false)

    const editOnclick =()=> {
        setActionModal(false)
        setActionType('edit')
        setItemId(item.id)
        setContentType('comment')
    }
    const deleteOnclick =()=> {
        setActionModal(false)
        dispatch(deleteComment(item.id)).then(()=>{
            dispatch(loadAllPostsOfUsersFollowed())
        })
    }

    return (
        <>
            <Link className='comment-action-dot' onClick={()=>setActionModal(true)}>···</Link>
            {showActionModal && (
                <Modal onClose={() => setActionModal(false)}>
                    <div className='action-outer'>
                        <button onClick={editOnclick} className='comment-action-button' id='one'>Edit</button>
                        <button onClick={deleteOnclick} className='comment-action-button' id='two'>Delete</button>
                        <button onClick={() => setActionModal(false)} className='comment-action-button' id='three'>Cancel</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default CommentReplyActionModal;
