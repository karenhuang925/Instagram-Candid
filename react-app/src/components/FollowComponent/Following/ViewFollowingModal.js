import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../../context/Modal"
import ViewFollowing from "./ViewFollowing"
import { useSelector, useDispatch } from "react-redux";
import { fetchFollower } from "../../../store/followers";
import { getUserFunction } from "../../../store/userV1";

import "./ViewFollowingModal.css"

function ViewFollowingModal({user}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFunction(user?.id))
        dispatch(fetchFollower(user?.id));
    }, [dispatch])

    // const sessionUser = useSelector((state) => state?.session) || "" 
    const following = useSelector((state) => state?.follows?.following) || "";

    const [showFollowingModal, setFollowingModal] = useState(false)

    return (
        <>
            <Link className='user-detail-following' onClick={() => setFollowingModal(true)}>
                {!following ? <span id="number-1">0</span> : <span id="number-2">{Object?.keys(following)?.length}</span>}
                {/* <span id="number-2">{Object?.keys(followers)?.length}</span> */}
                <span>following</span>
            </Link>
            {showFollowingModal && (
                <Modal onClose={() => setFollowingModal(false)}>
                    <ViewFollowing following={following} user={user}/>
                </Modal>
            )}
        </>
    )
}

export default ViewFollowingModal;