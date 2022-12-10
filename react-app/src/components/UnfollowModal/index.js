import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMinusFollower } from "../../store/followers";
import { getUserFunction } from "../../store/userV1";
import "./UnfollowModal.css";

function UnfollowModal({ userId, followsUserId }) {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState("true");
  const [showUnfollowModal, setShowUnfollowModal] = useState(true);

  useEffect(() => {
    dispatch(getUserFunction(userId));
  }, [dispatch]);

  const account = useSelector((state) => state?.user);

  const handleUnfollow = async () => {
    await dispatch(fetchMinusFollower({ userId, followsUserId }));
    setFollowed(!followed);
    setShowUnfollowModal(false);
  };

  return (
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
  );
}

export default UnfollowModal;
