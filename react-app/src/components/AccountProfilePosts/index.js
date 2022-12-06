import "./AccountProfilePost.css";

const AccountProfilePost = ({ post }) => {
  return (
    <img
      id="post-preview"
      src={post?.Media[0].media_file}
      alt="Post Image Preview"
    />
  );
};

export default AccountProfilePost;
