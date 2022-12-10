import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCommentsByPostId } from "../../store/comments";
import { createReply } from "../../store/reply";

const ReplyForm = ({ reply, itemId, formType }) => {
  const dispatch = useDispatch();
  const [replyContent, setReplyContent] = useState(reply.reply);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (formType === "Post") {
      dispatch(createReply(itemId, replyContent));
      // .then(()=>{
      //     dispatch(loadCommentsByPostId(itemId))
      // })
    }
    // else if(formType === "Edit"){
    //     dispatch(editComment(replyContent, itemId))
    //     setActionType('post')
    // }
    setReplyContent("");
  };

  return (
    <form className="post-comment-form">
      <label>
        <input
          className="post-comment-input"
          type="text"
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          required
        />
      </label>
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
