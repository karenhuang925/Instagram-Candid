import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createPost } from "../store/post";

const CreatePost = ({ post }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [caption, setCaption] = useState(post.caption);
  const [location, setLocation] = useState(post.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    post = { ...post, caption, location };

    dispatch(createPost(post));

    history.push("/posts/${post.id}");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Caption
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
    </form>
  );
};

export default CreatePost;
