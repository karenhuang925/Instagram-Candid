import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import {useDispatch, useSelector, } from "react-redux"
import { useEffect } from 'react';
import { fetchSuggestion } from '../../../store/followers';
import "./FollowerSuggestion.css"
import { Link } from 'react-router-dom';


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
            <div className='user-profile'>
                <img alt='preview' src={user.preview_image} className='profile-pic'></img>
                <p className='username'>{user.username}</p>
                <Link className='action-link'>Log out</Link>
            </div>
            <div className='suggest-list'>
                <div className='title-flex'>
                    <p className='title-suggest'>Suggestions For You</p>
                    <Link className='action-link seeall' >See All</Link>
                </div>
                {followerSuggest['Followers Suggestion'].map((suggestion)=>{
                    return(
                        <div key={suggestion.id}>
                            <div className='user-profile'>
                                <img alt='preview_image' src={suggestion.preview_image} className='suggestion-profile-pic'></img>
                                <div className='username'>
                                    <p className='title-username'>{suggestion.username}</p>
                                    <p className='sub-username'> Suggested for you</p>
                                </div>
                                <Link className='action-link'>Follow</Link>
                            </div>
                        </div>

                    )
                })}
                <div className='more'>
                    <p>About • Help • Press • API - Jobs • Privacy • Terms</p>
                    <p>Locations • Language</p>
                    <p>@2022 App Academy Candid</p>
                </div>
            </div>
        </div>
    )
}

export default FollowerSuggestion;
