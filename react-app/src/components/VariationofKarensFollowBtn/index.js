import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { fetchPlusFollower } from "../../store/followers";
import UnfollowModal from "../UnfollowModal";
import "./Variation.css";

function FollowButton({ userId, followsUserId }) {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(false);
  const [showUnfollowModal, setShowUnfollowModal] = useState(false);

  const handleFollow = async () => {
    await dispatch(fetchPlusFollower({ userId, followsUserId }));
    setFollowed(!followed);
  };

  if (!followed) {
    return (
      <button id="follow-btn" onClick={handleFollow}>
        Follow
      </button>
    );
  }
  if (followed) {
    return (
      <>
        <button id="following-btn" onClick={() => setShowUnfollowModal(true)}>
          <span>Following </span>
          <i class="fa-solid fa-angle-down"></i>
        </button>
        {showUnfollowModal && (
          <Modal onClose={() => setShowUnfollowModal(false)}>
            <UnfollowModal />
            {/* maybe need props */}
          </Modal>
        )}
      </>
    );
  }
}
export default FollowButton;
