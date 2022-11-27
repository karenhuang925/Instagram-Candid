import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditPost = () => {
  const { bookId } = useParams();
  const book = useSelector((state) => state.books[bookId]);
};

export default EditPost;
