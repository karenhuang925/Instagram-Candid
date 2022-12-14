import ReplyForm from './ReplyForm';
import { useEffect, useState } from 'react';

const CreateReplyForm = ({item, replyTo, postId, setContentType}) => {

    // let reply = {
    //     reply: `@${replyTo} `
    // };
    // useEffect(()=>{
    //     reply = {reply: `@${replyTo} `};
    // },[replyTo])

    return (
        <ReplyForm itemId={item.id} formType="Post" replyTo={replyTo} postId={postId} setContentType={setContentType}/>
    );
}

export default CreateReplyForm;
