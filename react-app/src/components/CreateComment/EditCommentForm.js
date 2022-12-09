import { useEffect, useState } from 'react';
import { useParams, Route, Switch, Link } from 'react-router-dom';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from  './CommentForm'

const EditCommentForm = () => {

    let comment = useSelector(state => state.comment)

    if(spot){
        return (
            <CommentForm comment={comment} formType="Edit" />
        );
    }
}

export default EditCommentForm;
