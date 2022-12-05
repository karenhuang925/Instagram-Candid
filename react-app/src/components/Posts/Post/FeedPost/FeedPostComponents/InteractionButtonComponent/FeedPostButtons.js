import React from "react";
import "./FeedPostButtons.css"

function FeedPostButtons() {
    return (
        <>
            <div id='post-interaction-button-container'>
                <div id='interaction-button'>
                    <button className="LikeButtonLike"><i className="fa-regular fa-heart fa-1x"></i></button>
                </div>
                <div id='interaction-button'><i className="fa-regular fa-comment fa-1x"></i></div>
                <div id='interaction-button'><i className="fa-regular fa-paper-plane fa-1x"></i></div>
            </div>

            <div id='post-interaction-button-container'>
                <div id='interaction-button'><i className="fa-regular fa-bookmark fa-1x"></i></div>
            </div>
        </>
    )
}

export default FeedPostButtons;