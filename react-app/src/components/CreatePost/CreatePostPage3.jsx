import { useEffect, useState } from "react";
import "./style/CreatePostPage3.css";

function CreatePostPage3({ loaded }) {
    return (
        <div id="CreatePostPage3-id-d1" style={{width: "725px", height: "725px"}}>
            {
                !loaded && <h1>Loading...</h1>
            }
            {
                loaded && <h1>Done</h1>
            }
        </div>
    )
}

export default CreatePostPage3;