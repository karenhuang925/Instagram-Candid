import { useEffect } from "react";
import { fetchMyPosts } from "../../store/posts2";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const posts = Object.values(useSelector((state) => state.posts));
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchMyPosts());
  }, [dispatch]);

  return (
    <>
      <div>{sessionUser?.preview_image}</div>
      <span>{sessionUser?.username}</span>
      <span>posts</span>
      <span>followers</span>
      <span>following</span>
      {/* add aggregates */}
      <span>{sessionUser?.username}</span>
      <p>{sessionUser?.biography}</p>
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

export default ProfilePage;
