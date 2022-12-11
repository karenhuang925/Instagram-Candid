import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../../context/Modal"
import ViewFollower from "./ViewFollower"
import { useSelector, useDispatch } from "react-redux";
import { fetchFollower } from "../../../store/followers";
import { getUserFunction } from "../../../store/userV1";

import "./ViewFollowerModal.css"

function ViewFollowerModal({ user }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFunction(user?.id))
        dispatch(fetchFollower(user?.id));
    }, [dispatch])

    // const sessionUser = useSelector((state) => state?.session) || ""
    const followers = useSelector((state) => state?.follows?.followers) || "";

    const [showFollowerModal, setFollowerModal] = useState(false)

    return (
        <>
            <Link className='user-detail-followers' onClick={() => setFollowerModal(true)}>
                {!followers ? <span id="number-1">0</span> : <span id="number-2">{Object?.keys(followers)?.length}</span>}
                {/* <span id="number-2">{Object?.keys(followers)?.length}</span> */}
                <span>followers</span>
            </Link>
            {showFollowerModal && (
                <Modal onClose={() => setFollowerModal(false)}>
                    <ViewFollower followers={followers} user={user} />
                </Modal>
            )}
        </>
    )
}

export default ViewFollowerModal;