import ReplyForm from './ReplyForm';

const CreateReplyForm = ({item, replyTo}) => {
    const reply = {
        reply: `@${replyTo} `
    };

    return (
        <ReplyForm reply={reply} itemId={item.id} formType="Post" contentType='reply'/>
    );
}

export default CreateReplyForm;
