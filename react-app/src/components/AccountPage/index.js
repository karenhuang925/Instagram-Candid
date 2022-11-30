import { useEffect } from "react";
import { fetchUserPosts } from "../../store/posts2";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts";
import { useParams } from "react-router-dom";

const AccountPage = () => {
  const dispatch = useDispatch();

  const { accountId } = useParams();
  const account = useSelector((state) => state.users[accountId]);
  //fix
  const posts = Object.values(useSelector((state) => state.posts));
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchUserPosts(accountId));
  }, [dispatch]);

  return (
    <>
      <div>{account?.preview_image}</div>
      <span>{account?.username}</span>
      <button>Follow</button>
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
      </ul>
      <span>About</span>
    </>
  );
};

export default AccountPage;
