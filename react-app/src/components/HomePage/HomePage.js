import React from 'react';
import Feed from "../Post/Feed"
import { Switch, Route } from 'react-router-dom';
import "./HomePage.css"


function HomePage() {
    return (
        <div>
            <Feed />
        </div>
    )
}

export default HomePage;