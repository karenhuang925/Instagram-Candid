import { useEffect } from "react";
import { fetchUserPosts } from "../../store/posts2";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts";
import { Redirect, useParams } from "react-router-dom";
import {
  fetchCreateFollower,
  fetchMinusFollower,
  fetchPlusFollower,
} from "../../store/followers2";

const AccountPage = () => {
  const dispatch = useDispatch();

  const { accountId } = useParams();
  const account = useSelector((state) => state.users[accountId]);
  //fix
  const posts = Object.values(useSelector((state) => state.posts));
  const sessionUser = useSelector((state) => state.session.user);
  const followers = Object.values(
    useSelector((state) => state.user.followers.user_id)
  );
  //fix or fix reducer
  const following = Object.values(
    useSelector((state) => state.users[accountId].following)
  );
  //fix
  if (!sessionUser?.id) {
    return <Redirect to="/" />;
    //redirect should return to sign up/log in page, but not sure what url will be
  } else if (sessionUser?.id === accountId) {
    return <Redirect to="/users/current/posts" />;
  }
  //url might be different on frontend for profile page, worried that will flash below return on load

  const followAccount = async (e) => {
    e.preventDefault();

    if (following.includes(accountId)) {
      await dispatch(fetchPlusFollower(accountId));
    } else if (!following.includes(accountId)) {
      await dispatch(fetchCreateFollower(accountId));
    }
  };

  const unfollowAccount = async (e) => {
    e.preventDefault();

    if (!followers.includes(sessionUser?.id))
      await dispatch(fetchMinusFollower(account.id));
  };

  useEffect(() => {
    dispatch(fetchUserPosts(accountId));
  }, [dispatch]);

  return (
    <>
      <div>{account?.preview_image}</div>
      <span>{account?.username}</span>
      {!followers.includes(sessionUser?.id) && (
        <button onClick={followAccount}>Follow</button>
      )}
      {followers.includes(sessionUser?.id) && (
        <button onClick={unfollowAccount}>Unfollow</button>
      )}
      {/* toggle button depending whether or not follower already */}
      <span>posts</span>
      <span>followers</span>
      <span>following</span>
      {/* add aggregates */}
      <span>{account?.username}</span>
      <p>{account?.biography}</p>
      <span>Posts</span>
      <hr />
      <hr />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post />
          </li>
        ))}
        {/* posts should be wrapped in a link to the modal, on hover it should show numbers of likes and comments */}
      </ul>
      <span>About</span>
      {/* link to github repo */}
    </>
  );
};

export default AccountPage;
