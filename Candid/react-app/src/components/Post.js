import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../store/post";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const deletePostFunc = (e) => {
    e.preventDefault();

    dispatch(deletePost(post.id));
  };

  return (
    <li>
      <button onClick={deletePostFunc}>Delete</button>
      {/* where is delete on instagram posts? */}
    </li>
  );
};

export default Post;
