import { useEffect } from "react";
import { loadAllCurrentUserPosts } from "../../store/posts2";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const posts = Object.values(useSelector((state) => state.posts));
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(loadAllCurrentUserPosts());
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
        {/* posts should be wrapped in a link to the modal, on hover it should show numbers of likes and comments */}
      </ul>
      <span>About</span>
      {/* link to github repo */}
    </>
  );
};

export default ProfilePage;
