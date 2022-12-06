import { useEffect, useState } from "react";
import "./style/CreatePostPage3.css";

function CreatePostPage3({ loaded }) {
    const [raw, setRaw] = useState(loaded)
    useEffect(() => {
        if(loaded) setRaw(loaded)
    }, [loaded])
    return (
        <div id="CreatePostPage3-id-d1" style={{width: "725px", height: "725px"}}>
            {
                !raw && <h1>Loading...</h1>
            }
            {
                raw && <h1>Done</h1>
            }
        </div>
    )
}

export default CreatePostPage3;