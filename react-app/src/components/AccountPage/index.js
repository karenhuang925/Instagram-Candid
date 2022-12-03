import { useEffect } from "react";
import { fetchUserPosts } from "../../store/posts2";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts";
import { Redirect, useParams } from "react-router-dom";
import { fetchPlusFollower } from "../../store/followers";

const AccountPage = () => {
  const dispatch = useDispatch();

  const { accountId } = useParams();
  const account = useSelector((state) => state.users[accountId]);
  //fix
  const posts = Object.values(useSelector((state) => state.posts));
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser.id === accountId) {
    return <Redirect to="/users/current/posts" />;
  }
  //url might be different on frontend for profile page, worried that will flash below return on load

  const followAccount = async (e) => {
    e.preventDefault();

    await dispatch(fetchPlusFollower(account.id));
    // different dispatch if already a follower
  };

  useEffect(() => {
    dispatch(fetchUserPosts(accountId));
  }, [dispatch]);

  return (
    <>
      <div>{account?.preview_image}</div>
      <span>{account?.username}</span>
      <button onClick={followAccount}>Follow</button>
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
