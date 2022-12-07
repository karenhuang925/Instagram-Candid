import { useEffect } from "react";
import { loadAllCurrentUserPosts } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollower, fetchFollowing } from "../../store/followers";
import { getUserFunction } from "../../store/userV1";
import AccountProfilePost from "../AccountProfilePosts";
import "../AccountPage/AccountPage.css";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state?.posts?.post) || "";
  const sessionUser = useSelector((state) => state?.session);
  const followers =
    useSelector((state) => state?.follows?.follower?.followers) || "";
  const following =
    useSelector((state) => state?.follows?.following?.following) || "";

  useEffect(() => {
    dispatch(getUserFunction(sessionUser?.id));
    dispatch(fetchFollower(sessionUser?.id));
    dispatch(fetchFollowing(sessionUser?.id));
    dispatch(loadAllCurrentUserPosts());
  }, [dispatch]);

  return (
    <>
      <div id="profile-div">
        <div id="profile-top">
          <img
            src={sessionUser?.preview_image}
            alt="Account Profile Picture"
            id="profile-pic"
          />
          <div id="profile-right">
            <div id="profile-top-right">
              <span id="profile-username">{sessionUser?.username}</span>
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
            </div>
            <p id="profile-names">
              {sessionUser?.first_name} {sessionUser?.last_name}
            </p>
            <p id="biograph">{sessionUser?.biography}</p>
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

export default ProfilePage;
