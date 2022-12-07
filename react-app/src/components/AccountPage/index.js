import { useEffect } from "react";
import { loadAllPostsByUserId } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import {
  fetchFollower,
  fetchFollowing,
  fetchMinusFollower,
  fetchPlusFollower,
} from "../../store/followers";
import { getUserFunction } from "../../store/userV1";
import AccountProfilePost from "../AccountProfilePosts";
import "./AccountPage.css";

const AccountPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserFunction(id));
    dispatch(fetchFollower(id));
    dispatch(fetchFollowing(id));
    dispatch(loadAllPostsByUserId(id));
  }, [dispatch]);

  const account = useSelector((state) => state?.user);
  const posts = useSelector((state) => state?.posts?.post) || "";
  const sessionUser = useSelector((state) => state?.session);
  const followers =
    useSelector((state) => state?.follows?.follower?.followers) || "";

  // let newArr = [];

  // followers?.forEach((follow) => {
  //   newArr.push(follow.user_id);
  // });
  const following =
    useSelector((state) => state?.follows?.following?.following) || "";

  if (sessionUser?.id === id) {
    return <Redirect to="/my/profile" />;
  }

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
      <div id="profile-div">
        <div id="profile-top">
          <img
            src={account?.preview_image}
            alt="Account Profile Picture"
            id="profile-pic"
          />
          <div id="profile-right">
            <div id="profile-top-right">
              <span id="profile-username">{account?.username}</span>
              {/* following.forEach(user => {
                return ({
                  user_id === user
                })
              }) && */}

              {!followers?.includes(sessionUser?.id) && (
                <button className="follow-btn" onClick={followAccount}>
                  Follow
                </button>
              )}
              {followers?.includes(sessionUser?.id) && (
                <button className="follow-btn" onClick={unfollowAccount}>
                  Unfollow
                </button>
              )}
            </div>
            <div id="profile-aggs">
              <div id="post-agg">
                <span id="number-1">{Object?.keys(posts)?.length}</span>
                <span>posts</span>
              </div>
              <div id="follower-agg">
                <span id="number-2">{Object?.keys(followers)?.length}</span>
                <span>followers</span>
              </div>
              <div id="following-agg">
                <span id="number-3">{Object?.keys(following)?.length}</span>
                <span>following</span>
              </div>
              {/* add aggregates */}
            </div>
            <p id="profile-names">
              {account?.first_name} {account?.last_name}
            </p>
            <p id="biograph">{account?.biography}</p>
          </div>
        </div>
        <hr id="long-hr" />
        <span id="post-tab">POSTS</span>
        <div id="post-previews">
          {Object?.keys(posts)?.map((postId) => {
            return <AccountProfilePost key={postId} post={posts[postId]} />;
          })}
          {/* posts should be wrapped in a link to the modal, on hover it should show numbers of likes and comments */}
        </div>
        <p className="about-link">About</p>
        {/* link to github repo */}
      </div>
    </>
  );
};

export default AccountPage;
