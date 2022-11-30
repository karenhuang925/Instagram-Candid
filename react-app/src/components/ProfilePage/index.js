import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const posts = Object.values(useSelector((state) => state.posts));
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div>{sessionUser?.preview_image}</div>
      <span>{sessionUser?.username}</span>
      <button>Follow</button>
      <button>Message</button>
      <span>posts</span>
      <span>followers</span>
      <span>following</span>
      {/* add aggregates */}
      <span>{sessionUser?.username}</span>
      <p>{sessionUser?.biography}</p>
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

export default ProfilePage;
