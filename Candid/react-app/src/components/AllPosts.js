import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";

const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = Object.values(useSelector((state) => state.posts));

  return (
    <section>
      <ul>
        {posts.map((post) => {
          <Post post={post} key={post.id} />;
        })}
      </ul>
    </section>
  );
};

export default AllPosts;
