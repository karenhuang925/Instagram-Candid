const AccountProfilePost = ({ post }) => {
  return <img src={post?.Media[0].media_file} alt="Post Image Preview" />;
};

export default AccountProfilePost;
