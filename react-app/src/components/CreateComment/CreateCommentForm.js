import CommentForm from './CommentForm';

const CreateCommentForm = ({itemId}) => {
    const comment = {
        comment: ''
    };

    return (
        <CommentForm comment={comment} itemId={itemId} formType="Post" />
    );
}

export default CreateCommentForm;
