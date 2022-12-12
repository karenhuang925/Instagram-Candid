import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { fetchFollowing, fetchSuggestion } from '../../../store/followers';
import "./FollowerSuggestion.css"
import { Link, NavLink, useHistory } from 'react-router-dom';
import { logOutFunction } from '../../../store/user';
// import { NavLink } from 'react-router-dom';
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
    if (!user) {
        return null
    }
    else if (user?.preview_image.length < 10) {
        user.preview_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    }


    return (
        <div className='suggestion-outer'>
            <div className='user-profile'>
                <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/profile/${user?.id}`} exact={true} activeClassName='active'>
                    <img alt='preview' src={user.preview_image} className='profile-pic'></img>
                </NavLink>
                <p className='username'>
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/profile/${user?.id}`} exact={true} activeClassName='active'>
                        {user.username}
                    </NavLink>
                </p>
                <Link className='action-link' onClick={onLogout} to='/' >Log out</Link>
            </div>
            <div className='suggest-list'>
                <div className='title-flex'>
                    <p className='title-suggest'>Suggestions For You</p>
                </div>
                {followerSuggest.map((suggestion) => {
                    if (suggestion?.preview_image.length < 10) {
                        suggestion.preview_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                    }
                    return (
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
                    <p>Kelly Artola: • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://github.com/KellyAnneSantos")}>Github</NavLink> • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://www.linkedin.com/in/kelly-a-296a23b6/")}>LinkedIn</NavLink></p>
                    <p>Karen Huang: • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://github.com/karenhuang925")}>Github</NavLink> • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://www.linkedin.com/in/karen-huang-274b5b10b/")}>LinkedIn</NavLink></p>
                    <p>George Merida: • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://github.com/gmerida92")}>Github</NavLink> • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://www.linkedin.com/in/george-merida-441988140/")}>LinkedIn</NavLink></p>
                    <p>Alonso Vazquez: • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://github.com/alonsoVQZ")}>Github</NavLink> • <NavLink style={{ textDecoration: 'none', color: 'rgb(181, 180, 180)' }} to="/" onClick={() => (window.location.href = "https://www.linkedin.com/in/vqzmata/")}>LinkedIn</NavLink></p>
                    {/* <NavLink id="external_link" to="/" onClick={() => (window.location.href = "https://github.com/gmerida92")}>Github</NavLink>
                    <NavLink id="external_link" to="/" onClick={() => (window.location.href = "https://www.linkedin.com/in/george-merida-441988140/")}>LinkedIn</NavLink> */}
                    {/* <p>About • Help • Press • API - Jobs • Privacy • Terms</p>
                    <p>Locations • Language</p>
                    <p>@2022 App Academy Candid</p> */}
                </div>
            </div>
        </div>
    )
}

export default FollowerSuggestion;
