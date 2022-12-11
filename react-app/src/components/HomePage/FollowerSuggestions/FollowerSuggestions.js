import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { fetchFollowing, fetchSuggestion} from '../../../store/followers';
import "./FollowerSuggestion.css"
import { Link,  useHistory } from 'react-router-dom';
import { logOutFunction } from '../../../store/user';
import FollowButton from './followButton';

function FollowerSuggestion() {
    const history = useHistory()
    let user = useSelector((state) => state.session)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSuggestion(user.id))
        dispatch(fetchFollowing(user.id))
    }, [dispatch]);

    let followerSuggest = useSelector((state) => state?.follows)['Followers Suggestion']

    const onLogout = async () => {
        await dispatch(logOutFunction());
        history.push('/')
    };

    if (!followerSuggest) {
        return null;
    }
    if (!user){
        return null
    }
    else if (user?.preview_image.length < 10){
        user.preview_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    }


    return (
        <div className='suggestion-outer'>
            <div className='user-profile'>
                <img alt='preview' src={user.preview_image} className='profile-pic'></img>
                <p className='username'>{user.username}</p>
                <Link className='action-link' onClick={onLogout} to='/' >Log out</Link>
            </div>
            <div className='suggest-list'>
                <div className='title-flex'>
                    <p className='title-suggest'>Suggestions For You</p>
                </div>
                    {followerSuggest.map((suggestion)=>{
                        if (suggestion?.preview_image.length < 10){
                            suggestion.preview_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                    }
                    return(
                        <div key={suggestion.id}>
                            <div className='user-profile'>
                                <img alt='preview_image' src={suggestion.preview_image} className='suggestion-profile-pic'></img>
                                <div className='username'>
                                    <p className='title-username'>{suggestion.username}</p>
                                    <p className='sub-username'> Suggested for you</p>
                                </div>
                                <FollowButton userId={user.id} followsUserId={suggestion.id} >Follow</FollowButton>
                            </div>
                        </div>
                    )
                })}
                <div className='more-info'>
                    <p>About • Help • Press • API - Jobs • Privacy • Terms</p>
                    <p>Locations • Language</p>
                    <p>@2022 App Academy Candid</p>
                </div>
            </div>
        </div>
    )
}

export default FollowerSuggestion;
