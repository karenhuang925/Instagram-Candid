import { useEffect, useState } from "react";
import { loadAllPostsByUserId } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFollower, fetchFollowing } from "../../store/followers";
import { getUserFunction } from "../../store/userV1";
import AccountProfilePost from "../AccountProfilePosts";
import "./AccountPage.css";
import { useHistory } from "react-router-dom";
import FollowButton2 from "../Variation2";
import FollowButton from "../VariationofKarensFollowBtn";

import ViewFollowerModal from "../FollowComponent/Follower/ViewFollowerModal";

const AccountPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [newArr, setNewArr] = useState([]);

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
  const followers = useSelector((state) => state?.follows?.followers) || "";
  const following = useSelector((state) => state?.follows?.following) || "";

  useEffect(() => {
    let arr = [];
    if (followers) {
      followers.forEach((follow) => {
        arr.push(follow.user_id);
      });
      setNewArr([...newArr, ...arr]);
    }
  }, [followers]);

  if (sessionUser?.id === parseInt(id)) {
    history.push("/my/profile");
  }

  // George-added this for contitional safety
  if (!posts) return null;

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
              {/* {!newArr?.includes(sessionUser?.id) && (
                <FollowButton userId={sessionUser?.id} followsUserId={id} />
              )}
              {newArr?.includes(sessionUser?.id) && (
                <FollowButton2 userId={sessionUser?.id} followsUserId={id} />
              )} */}
            </div>
            <div id="profile-aggs">
              <div id="post-agg">
                {!posts ? <span id="number-1">0</span> : <span id="number-1">{Object?.keys(posts)?.length}</span>}
                <span>posts</span>
              </div>
              <div id="follower-agg">
                {!followers ? <span id="number-2">0</span> : <span id="number-2">{Object?.keys(followers)?.length}</span>}
                <span>followers</span>

                {/* <ViewFollowerModal post={post} followers={followers} /> */}
              </div>
              <div id="following-agg">
                {!following ? <span id="number-3">0</span> : <span id="number-2">{Object?.keys(following)?.length}</span>}
                <span>following</span>
              </div>
            </div>
            <p id="profile-names">
              {account?.first_name} {account?.last_name}
            </p>
            {!account?.biography ? <p id="biograph">Welcome</p> : <p id="biograph">{account?.biography}</p>}
            {/* <p id="biograph">{account?.biography}</p> */}
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
          {/* {Object?.keys(posts)?.map((postId) => {
            return <AccountProfilePost key={postId} post={posts[postId]} />;
          })} */}
          {/* {posts?.map((post) => {
            return (
              <AccountProfilePost
                key={post.id}
                post={post}
                // user={sessionUser}
              />
            );
          })} */}
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

export default AccountPage;
