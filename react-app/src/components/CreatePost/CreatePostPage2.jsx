import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import "./style/CreatePostPage2.css";

function CreatePostPage2({ images, setImages, caption, setCaption, location, setLocation }) {
    return (
        <div id="CreatePostPage2-id-d1" style={{width: "1050px", height: "725px"}}>
            <MediaPreview { ...{ images, setImages } }/>
            <WriteCaption { ...{ caption, setCaption, location, setLocation } }/>
        </div>
    );
}

function MediaPreview ({ images, setImages }) {
    const [counter, setCounter] = useState(0);
    const [currentPhoto, setCurrentPhoto] = useState(images[counter])
    const handleNextPhoto = () => {
        setCurrentPhoto(images[counter + 1])
        setCounter(counter + 1)
    }
    const handlePreviousPhoto = () => {
        setCurrentPhoto(images[counter - 1])
        setCounter(counter - 1)
    }
    return (
        <div id="MediaPreview-id-d1">
            <img id="MediaPreview-id-d1i1" src={currentPhoto} />
            {
                counter > 0 && (
                    <div id="MediaPreview-id-d1b1" className="MediaPreview-d1d" type="button" onClick={(e) => handlePreviousPhoto()}>
                        <svg aria-label="Left chevron" class="_ab6-" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16"><polyline fill="none" points="16.502 3 7.498 12 16.502 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                    </div>
                )
            }
            {
                counter < images.length - 1 && (
                    <div id="MediaPreview-id-d1b2" className="MediaPreview-d1d" onClick={(e) => handleNextPhoto()}>
                        <svg aria-label="Right chevron" class="_ab6-" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16"><polyline fill="none" points="8 3 17.004 12 8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                    </div>
                )
            }
        </div>
    );
}

function WriteCaption({ caption, setCaption, location, setLocation }) {
    let user = useSelector((state) => state?.session) || ""

    const [innerCaption, setInnerCaption] = useState("")

    const [innerLocation, setInnerLocation] = useState("")
    const [captionLength, setCaptionLenght]= useState(0)

    const [previewImage, setPreviewImage] = useState("")
    const [username, setUsername] = useState("")

    useEffect(() => {
        setCaptionLenght(innerCaption.length)
        setCaption(innerCaption)
    }, [innerCaption])

    useEffect(() => {
        setLocation(innerLocation)
    }, [innerLocation])

    useEffect(() => {
        setPreviewImage(user.preview_image);
        setUsername(user.username)
    }, [])

    return (
        <div id="WriteCaption-id-d1">
            <div id="WriteCaption-id-d1d1">
                <div id="WriteCaption-id-d1d1d1">
                    <img id="WriteCaption-id-d1d1d1i1" src={previewImage} alt="" />
                </div>
                <span style={{marginLeft: "10px", fontWeight: "bold"}}>{username}</span>
            </div>
            <div id="WriteCaption-id-d1d2" className="WriteCaption-d1d">
                <textarea rows="10" style={{width: "275px"}} placeholder="Write a caption..." value={innerCaption} onChange={(e) => setInnerCaption(e.target.value)}></textarea>
                <div id="WriteCaption-id-d1d1d2">
                    <img src="" alt="" />
                    <span>{`${captionLength}/2,200`}</span>
                </div>
            </div>
            <div id="WriteCaption-id-d1d3" className="WriteCaption-d1d">
                <input style={{width: "275px"}} type="text" placeholder="Add location..." value={innerLocation} onChange={(e) => setInnerLocation(e.target.value)}/>
            </div>
        </div>
    )
}

export default CreatePostPage2;