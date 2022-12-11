import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost, loadAllPosts,loadAllPostsOfUsersFollowed } from "../../store/posts";
import { addMediaFunction } from "../../store/media";
import "./style/CreatePostPage3.css";

function CreatePostPage3({ images, caption, location }) {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            const postData = {
                caption,
                location
            }
            const newPost = await dispatch(createPost(postData));
            const mediaData = {
                post_id: newPost.id,
                user_id: newPost.user_id,
                type: "image"
            }
            for (let index = 0; index < images.length; index++) {
                mediaData.media_file = images[index]
                await dispatch(addMediaFunction(mediaData))
            }
            dispatch(loadAllPostsOfUsersFollowed())
            setLoaded(true)
        })();
    }, []);

    return (
        <div id="CreatePostPage3-id-d1" style={{width: "725px", height: "725px"}}>
            {
                !loaded && <h1>Loading...</h1>
            }
            {
                loaded && (
                    <div id="CreatePostPage3-id-d1d1">
                        <img style={{width: "100px", height: "auto"}} src="https://static.cdninstagram.com/rsrc.php/v3/yb/r/sHkePOqEDPz.gif"></img>
                        <h2>You post has been shared</h2>
                    </div>
                )
            }
        </div>
    )
}

export default CreatePostPage3;