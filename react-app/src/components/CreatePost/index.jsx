import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Store
import { createPost, loadAllPosts } from "../../store/posts";
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
        setPostPage(postPages[currentPage + 1]);
        setCurretPage(currentPage + 1)
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
        await dispatch(loadAllPosts())
        setLoaded(true)
    }
    return (
        <div id="CreatePost-id-d1">
            <div id="CreatePost-id-d1d1">
                { currentPage > 0 && <button type="button" onClick={() => handleBack()} style={{gridColumn: 1}}>Back</button> }
                <span style={{gridColumn: 2}}>Create new post</span>
                { currentPage < postPages.length - 2 && <button type="button" onClick={() => handleNext()} style={{gridColumn: 3}}>Next</button> }
                { currentPage === postPages.length - 2 && <button type="button" onClick={() => handleShare()} style={{gridColumn: 3}}>Share</button> }
            </div>
            <div id="CreatePost-id-d1d2">
                { postPage }
            </div>
        </div>
    );
}

export default CreatePost;