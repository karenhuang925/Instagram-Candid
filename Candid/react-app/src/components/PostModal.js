import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../store/post";

const PostModal = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.posts[postId]);
  // const likeStatus = useSelector((state) => state.posts[postId].likeStatus); (wrong)

  const changeLike = (e) => {
    e.preventDefault();

    dispatch(toggleLike(postId));
  };

  return (
    <section>
      Caption: {post.caption}
      <br />
      Location: {post.location}
      <br />
      <button onClick={changeLike}>
        {post.likeStatus === true && "Like"}
        {post.likeStatus === false && "Unlike"}
        {/* this should be an icon, check if called likeStatus on backend */}
      </button>
    </section>
  );
};

export default PostModal;
