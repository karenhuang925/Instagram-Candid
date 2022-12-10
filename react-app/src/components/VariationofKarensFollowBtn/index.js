import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Modal } from "../../context/Modal";
import { fetchFollower, fetchPlusFollower } from "../../store/followers";
// import UnfollowModal from "../UnfollowModal";
// import { Link } from "react-router-dom";
// import { fetchMinusFollower } from "../../store/followers";
// import { getUserFunction } from "../../store/userV1";
import "./Variation.css";

function FollowButton({ userId, followsUserId }) {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(false);

  const handleFollow = async () => {
    await dispatch(fetchPlusFollower({ userId, followsUserId })).then(() =>
      dispatch(fetchFollower(followsUserId))
    );
    setFollowed(!followed);
  };

  return (
    <button id="follow-btn" onClick={handleFollow}>
      Follow
    </button>
  );
}

export default FollowButton;
