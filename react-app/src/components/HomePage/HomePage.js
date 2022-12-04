import React from 'react';
import Feed from "../Posts/Feed"
import "./HomePage.css"
import FollowerSuggestions from './FollowerSuggestions/FollowerSuggestions';

let feedAndSuggestStyle={
    display: "flex",
    justifyContent: 'center',
    marginLeft: '250px'
}

function HomePage() {
    return (
        <div style={feedAndSuggestStyle}>
            <Feed />
            <FollowerSuggestions />
        </div>
    )
}

export default HomePage;
