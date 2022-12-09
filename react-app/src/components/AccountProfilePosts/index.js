import { Link } from "react-router-dom";
import "./AccountProfilePost.css";
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PostDetail from "../Posts/Post/PostDetail/PostDetail";

const AccountProfilePost = ({ post }) => {
  const [showPostModal, setShowPostModal] = useState(false);
  return (
    <>
      <Link onClick={() => setShowPostModal(true)}>
        <img
          id="post-preview"
          src={post?.Media[0].media_file}
          alt="Post Image Preview"
        />
      </Link>
      {showPostModal && (
        <Modal onClose={() => setShowPostModal(false)}>
          <PostDetail postId={post.id} />
        </Modal>
      )}
    </>
  );
};

export default AccountProfilePost;
