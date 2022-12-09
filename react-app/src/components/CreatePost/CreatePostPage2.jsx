import { useState, useEffect } from "react";
import "./style/CreatePostPage2.css";


function CreatePostPage2({ images, setImages, caption, setCaption }) {
    return (
        <div id="CreatePostPage2-id-d1" style={{width: "1050px", height: "725px"}}>
            <MediaPreview { ...{ images, setImages } }/>
            <WriteCaption { ...{ caption, setCaption } }/>
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

function WriteCaption({ caption, setCaption }) {
    const [innerCaption, setInnerCaption] = useState("")
    const [captionLength, setCaptionLenght]= useState(0)
    useEffect(() => {
        setCaptionLenght(innerCaption.length)
        setCaption(innerCaption)
    }, [innerCaption])
    return (
        <div id="WriteCaption-id-d1">
            <div id="WriteCaption-id-d1d1" className="WriteCaption-d1d">
                <div id="WriteCaption-id-d1d1d1">
                    <img src="" alt="" />
                    <span>vqzmata</span>
                </div>
                <textarea rows="10" style={{width: "100%"}} placeholder="Write a caption..." value={innerCaption} onChange={(e) => setInnerCaption(e.target.value)}></textarea>
                <div id="WriteCaption-id-d1d1d2">
                    <img src="" alt="" />
                    <span>{`${captionLength}/2,200`}</span>
                </div>
            </div>
            <div id="WriteCaption-id-d1d2" className="WriteCaption-d1d">
                <span>Add location</span>
            </div>
            <div id="WriteCaption-id-d1d3" className="WriteCaption-d1d">
                <span>Accessibility</span>
            </div>
            <div id="WriteCaption-id-d1d4" className="WriteCaption-d1d">
                <span>Advanced settings</span>
            </div>
        </div>
    )
}

export default CreatePostPage2;