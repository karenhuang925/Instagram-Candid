import React from 'react';
import Feed from "../Posts/Feed"
// import { Switch, Route } from 'react-router-dom';
import "./HomePage.css"
import FollowerSuggestions from './FollowerSuggestions/FollowerSuggestions';


function HomePage() {
    return (
        <>
            <Feed />
            {/* <FollowerSuggestions /> */}
        </>
    )
}

export default HomePage;
