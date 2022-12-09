import { useEffect, useState } from 'react';
import { useParams, Route, Switch, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from  './CommentForm'

const EditCommentForm = ({itemId, setActionType }) => {
    let comment = useSelector(state => state.comments.comment[itemId])

    if(!comment) return null

    return (
        <CommentForm comment={comment} itemId={itemId} formType="Edit" setActionType={setActionType}/>
    );
}

export default EditCommentForm;
