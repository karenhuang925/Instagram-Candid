import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AccountProfilePost.css";
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PostDetail from "../Posts/Post/PostDetail/PostDetail";

const AccountProfilePost = ({ post }) => {
  console.log(post, "HERE")
  const [showPostModal, setShowPostModal] = useState(false);
  let [wasLiked, setWasLiked] = useState(post?.likeStatus);
  // const [hover, setHover] = useState(false);

  // const handleMouseOver = () => {
  //   setHover(true);
  // };

  // const handleMouseOut = () => {
  //   setHover(false);
  // };

  const sessionUser = useSelector((state) => state?.session);

  return (
    <>
      <Link
        style={{ display: "inline-flex" }}
        onClick={() => setShowPostModal(true)}
      >
        <div id="parent-div">
          <img
            id="post-preview"
            src={post?.Media[0].media_file}
            alt="Post Image Preview"
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
          />
          {/* {hover && ( */}
          <div id="post-overlay">
            <i id="white-heart" class="fa-solid fa-heart"></i>
            <span id="like-count">{post?.likes}</span>
            <i id="white-comment" class="fa-solid fa-comment"></i>
            <span id="comment-count">{post?.comments}</span>
          </div>
          {/* )} */}
        </div>
      </Link>
      {showPostModal && (
        <Modal onClose={() => setShowPostModal(false)}>
          <PostDetail post={post} user={sessionUser} wasLiked={wasLiked} setWasLiked={setWasLiked} inPostDetails={true}/>
        </Modal>
      )}
    </>
  );
};

export default AccountProfilePost;
