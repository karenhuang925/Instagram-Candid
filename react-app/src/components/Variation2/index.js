import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
// import { fetchPlusFollower } from "../../store/followers";
// import UnfollowModal from "../UnfollowModal";
import { Link } from "react-router-dom";
import { fetchFollower, fetchMinusFollower } from "../../store/followers";
import { getUserFunction } from "../../store/userV1";
import "../VariationofKarensFollowBtn/Variation.css";

function FollowButton2({ userId, followsUserId }) {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(true);
  const [showUnfollowModal, setShowUnfollowModal] = useState(false);

  useEffect(() => {
    dispatch(getUserFunction(followsUserId));
  }, [dispatch]);

  const account = useSelector((state) => state?.user);

  const handleUnfollow = async () => {
    console.log(userId, "BYE", followsUserId);
    await dispatch(fetchMinusFollower({ userId, followsUserId })).then(() => {
      dispatch(fetchFollower(followsUserId));
    });
    setFollowed(!followed);
    setShowUnfollowModal(false);
  };

  return (
    <>
      <button id="following-btn" onClick={() => setShowUnfollowModal(true)}>
        <span>Following </span>
        <i class="fa-solid fa-angle-down"></i>
      </button>
      {showUnfollowModal && (
        <Modal onClose={() => setShowUnfollowModal(false)}>
          {/* <UnfollowModal /> */}
          {/* maybe need props */}
          <div id="unfollow-modal">
            <div id="unfollow-modal-top">
              <img
                src={account?.preview_image}
                alt="Account Profile Picture"
                id="following-profile-pic"
              />
              <div>{account?.username}</div>
            </div>
            <Link id="unfollow-link" onClick={handleUnfollow}>
              Unfollow
            </Link>
            {/* close modal and unfollow when click link */}
          </div>
        </Modal>
      )}
    </>
  );
}

export default FollowButton2;
