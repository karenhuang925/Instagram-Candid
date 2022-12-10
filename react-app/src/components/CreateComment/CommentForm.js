import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { createComment, editComment } from "../../store/comments";
import { useDispatch } from "react-redux";
import { loadAllPostsOfUsersFollowed } from "../../store/posts";

const CommentForm = ({ comment, itemId, formType, setActionType }) => {

  const dispatch = useDispatch();

  const [frontendErrors, setFrontendErrors] = useState([]);

  const [redirect, setRedirect] = useState(false);
  const [commentContent, setCommentContent] = useState(comment.comment);
  const [loading, setLoading] = useState(false);

  // if(redirect){return ( <Redirect to={`/spots`} />)}
  const handleSubmit = (e) => {
    e.preventDefault();
    if(frontendErrors.length > 0) return
    // setErrors([]);
    // let newComment = { ...comment, comment:commentContent, postId};
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (formType === "Post") {
      dispatch(createComment(commentContent, itemId)).then(() => {
        dispatch(loadAllPostsOfUsersFollowed());
      });
      // .then((()=> {
      //     setRedirect(true)}))
      // .catch(
      //     async (res) => {
      //         const data = await res.json();
      //         if (data && data.errors) setErrors(data.errors);
      //     }
      // );
    } else if (formType === "Edit") {
      dispatch(editComment(commentContent, itemId));
      setActionType("post");
      // .then((()=> {
      //     setRedirect(true)}))
      // .catch(
      //     async (res) => {
      //         const data = await res.json();
      //         if (data && data.errors) setErrors(data.errors);
      //     }
      // );
    }
    setCommentContent("");
  };

  useEffect(() => {
    const errors = [];
    if(!commentContent.trim().length) errors.push("Invalid comment")
    setFrontendErrors(errors);
  }, [commentContent]);


  return (
    <form className="post-comment-form">
      <input
        placeholder="Add a comment..."
        className="post-comment-input"
        type="text"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
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

export default CommentForm;
