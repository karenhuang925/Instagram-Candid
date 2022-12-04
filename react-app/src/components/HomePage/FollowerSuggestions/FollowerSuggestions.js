import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import {useDispatch, useSelector, } from "react-redux"
import { useEffect } from 'react';
import { fetchSuggestion } from '../../../store/followers';
import "./FollowerSuggestion.css"


function FollowerSuggestion() {
    let user = useSelector((state) => state.session)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSuggestion(user.id))
    }, [dispatch]);
    let followerSuggest = useSelector((state) => state?.follows?.follower)

    if (!followerSuggest) {
        return null;
    }


    return (
        <div className='suggestion-outer'>
            <div>
                <img alt='preview_image' src={user.preview_image} className='profile-pic'></img>
            </div>
            <div>
                <div>
                    <h3>Suggestions For You</h3>
                    {followerSuggest['Followers Suggestion'].map((suggestion)=>{
                        return(
                            <div key={suggestion.id}>
                                <div>{suggestion.username}</div>
                            </div>
                        )
                    })}
                    <h3>See All</h3>
                </div>
            </div>
        </div>
    )
}

export default FollowerSuggestion;
