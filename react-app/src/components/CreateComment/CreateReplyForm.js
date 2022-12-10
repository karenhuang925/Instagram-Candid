import ReplyForm from './ReplyForm';
import { useState } from 'react';

const CreateReplyForm = ({item, replyTo}) => {
    const reply = {
        reply: `@${replyTo} `
    };

    const [replyContent, setReplyContent] = useState(reply.reply);
    return (
        <ReplyForm itemId={item.id} formType="Post" contentType='reply'replyContent={replyContent} setReplyContent={setReplyContent}/>
    );
}

export default CreateReplyForm;
