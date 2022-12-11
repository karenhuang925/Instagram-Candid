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
  const followers = useSelector((state) => state?.follows?.followers) || "";
  const following = useSelector((state) => state?.follows?.following) || "";

  useEffect(() => {
    dispatch(getUserFunction(sessionUser?.id));
    dispatch(fetchFollower(sessionUser?.id));
    dispatch(fetchFollowing(sessionUser?.id));
    dispatch(loadAllCurrentUserPosts());
  }, [dispatch]);

  if (!posts) return null;

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
                {!posts ? <span id="number-1">0</span> : <span id="number-1">{Object?.keys(posts)?.length}</span>}
                {/* <span id="number-1">{Object?.keys(posts)?.length}</span> */}
                <span>posts</span>
              </div>
              <div id="follower-agg">
                {!followers ? <span id="number-1">0</span> : <span id="number-2">{Object?.keys(followers)?.length}</span>}
                {/* <span id="number-2">{Object?.keys(followers)?.length}</span> */}
                <span>followers</span>
              </div>
              <div id="following-agg">
                {!following ? <span id="number-1">0</span> : <span id="number-2">{Object?.keys(following)?.length}</span>}
                {/* <span id="number-3">{Object?.keys(following)?.length}</span> */}
                <span>following</span>
              </div>
            </div>
            <p id="profile-names">
              {sessionUser?.first_name} {sessionUser?.last_name}
            </p>
            {!sessionUser?.biography ? <p id="biograph">Please Complete Profile...</p> : <p id="biograph">{sessionUser?.biography}</p>}
            {/* <p id="biograph">{sessionUser?.biography}</p> */}
          </div>
        </div>
        <hr id="long-hr" />
        <hr id="short-hr" />
        <i class="fa-solid fa-table-cells" id="grid-icon"></i>
        <span id="post-tab">POSTS</span>
        <div id="post-previews">
          {posts?.length === 0 ? <div className="account-no-posts"> No Posts Created </div> :
            <>
              {posts?.map((post) => {
                return <AccountProfilePost key={post?.id} post={post} />;
              })}
            </>
          }
        </div>
        {/* <a
          href="https://github.com/karenhuang925/Instagram-Candid"
          target={"_blank"}
          id="about-link"
        >
          <p id="about-paragraph">About</p>
        </a> */}
      </div>
    </>
  );
};

export default ProfilePage;
