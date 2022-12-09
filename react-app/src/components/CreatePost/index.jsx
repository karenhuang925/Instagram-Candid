import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Store
import { createPost, loadAllPosts,loadAllPostsOfUsersFollowed } from "../../store/posts";
import { addMediaFunction } from "../../store/media";

// Components
import CreatePostPage1 from "./CreatePostPage1";
import CreatePostPage2 from "./CreatePostPage2";
import CreatePostPage3 from "./CreatePostPage3";

import "./style/index.css"

function CreatePost({ setModal }) {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);
    const [images, setImages] = useState([]);
    const [caption, setCaption] = useState("");
    const postPages = [
        <CreatePostPage1 { ...{ images, setImages } }/>,
        <CreatePostPage2 { ...{ images, setImages, caption, setCaption } }/>,
        <CreatePostPage3 { ...{ loaded } } />
    ]
    const [currentPage, setCurretPage] = useState(0)
    const [postPage, setPostPage] = useState(postPages[currentPage])
    const handleBack = () => {
        setPostPage(postPages[currentPage - 1]);
        setCurretPage(currentPage - 1)
    }
    const handleNext = () => {
        if(images.length > 0) {
            setPostPage(postPages[currentPage + 1]);
            setCurretPage(currentPage + 1)
        }
    }
    const handleShare = async () => {
        setPostPage(postPages[currentPage + 1]);
        setCurretPage(currentPage + 1)
        const postData = {
            caption,
            location: ""
        }
        const newPost = await dispatch(createPost(postData))
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
    }
    return (
        <div id="CreatePost-id-d1">
            <div id="CreatePost-id-d1d1">
                { currentPage > 0 && <div className="CreatePost-d1d1b1" type="button" onClick={() => handleBack()} style={{gridColumn: 1}}><svg aria-label="Back" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg></div> }
                <span style={{gridColumn: 2}}>Create new post</span>
                { currentPage < postPages.length - 2 && <div className="CreatePost-d1d1d" onClick={() => handleNext()} style={{gridColumn: 3}}>Next</div> }
                { currentPage === postPages.length - 2 && <div className="CreatePost-d1d1d" onClick={() => handleShare()} style={{gridColumn: 3}}>Share</div> }
            </div>
            <div id="CreatePost-id-d1d2">
                { postPage }
            </div>
        </div>
    );
}

export default CreatePost;