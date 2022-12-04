import { useEffect } from "react";
import { loadAllPostsByUserId } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import {
  fetchFollower,
  fetchMinusFollower,
  fetchPlusFollower,
} from "../../store/followers";
import { getUserFunction } from "../../store/userV1";
import AccountProfilePost from "../AccountProfilePosts";

const AccountPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserFunction(id));
    dispatch(fetchFollower(id));
    dispatch(loadAllPostsByUserId(id));
  }, [dispatch]);

  const account = useSelector((state) => state?.user);
  const posts = useSelector((state) => state?.posts?.post) || "";
  const sessionUser = useSelector((state) => state?.session);
  const followers =
    useSelector((state) => state?.follows?.follower?.followers?.user_id) || "";
  if (!sessionUser?.id) {
    return <Redirect to="/" />;
  } else if (sessionUser?.id === id) {
    return <Redirect to="/users/current/posts" />;
  }
  //url might be different on frontend for profile page, worried that will flash below return on load

  const followAccount = async (e) => {
    e.preventDefault();

    await dispatch(fetchPlusFollower(account));
  };

  const unfollowAccount = async (e) => {
    e.preventDefault();

    await dispatch(fetchMinusFollower(account));
  };

  return (
    <>
      <img src={account?.preview_image} alt="Account Profile Picture" />
      <p>{account?.username}</p>
      {!Object?.values(followers)?.includes(sessionUser?.id) && (
        <button onClick={followAccount}>Follow</button>
      )}
      {Object?.values(followers)?.includes(sessionUser?.id) && (
        <button onClick={unfollowAccount}>Unfollow</button>
      )}
      <span>posts</span>
      <span>followers</span>
      <span>following</span>
      {/* add aggregates */}
      <p>
        {account?.first_name} {account?.last_name}
      </p>
      <p>{account?.biography}</p>
      <span>Posts</span>
      <hr />
      <hr />
      <section>
        {Object?.keys(posts)?.map((postId) => {
          return <AccountProfilePost key={postId} post={posts[postId]} />;
        })}
        {/* posts should be wrapped in a link to the modal, on hover it should show numbers of likes and comments */}
      </section>
      <p>About</p>
      {/* link to github repo */}
    </>
  );
};

export default AccountPage;
