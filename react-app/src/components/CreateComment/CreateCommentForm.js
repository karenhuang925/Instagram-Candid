import CommentForm from './CommentForm';

const CreateCommentForm = ({postId}) => {
    const comment = {
        comment: ''
    };

    return (
        <CommentForm comment={comment} postId={postId} formType="Post" />
    );
}

export default CreateCommentForm;
