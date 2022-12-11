import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadAllPostsOfUsersFollowed } from "../../store/posts";
import { createReply, loadRepliesByCommentId } from "../../store/reply";
import { loadCommentsByPostId } from "../../store/comments";

const ReplyForm = ({ itemId, formType, postId, replyTo}) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    setReplyContent(`@${replyTo} `)
  },[replyTo])

  const [frontendErrors, setFrontendErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(frontendErrors.length > 0) return
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (formType === "Post") {
      dispatch(createReply(itemId, replyContent))
      .then(()=>{
          dispatch(loadCommentsByPostId(postId))
      })
    }
    // else if(formType === "Edit"){
    //     dispatch(editComment(replyContent, itemId))
    //     setActionType('post')
    // }
    setReplyContent("");
  };


  useEffect(() => {
    const errors = [];
    if(!replyContent.trim().length) errors.push("Invalid reply")
    setFrontendErrors(errors);
  }, [replyContent]);


  return (
    <form className="post-comment-form">
        <input
          className="post-comment-input"
          type="text"
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          required
        />
      <input
        className="post-comment-button"
        type="submit"
        value={formType}
        onClick={handleSubmit}
      />
      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
    </form>
  );
};

export default ReplyForm;
