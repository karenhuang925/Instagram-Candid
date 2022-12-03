import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import {useSelector} from "react-redux"
import "./FollowerSuggestion.css"


function FollowerSuggestion() {
    let user = useSelector((state) => state.session.user)

    if (!user) {
        return null;
    }
    return (
        <div className='suggestion-outer'>
            <div>
                <img alt='preview_image' src={user.preview_image} ></img>
                {user.username}
            </div>
            <div>
                <div>
                    <h3>Suggestions For You</h3>
                    <h3>See All</h3>
                </div>
            </div>
        </div>
    )
}

export default FollowerSuggestion;
