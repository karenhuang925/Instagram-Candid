import { useEffect, useState } from "react";
import "./style/ImageTransition.css"

const images = [
    "/images/screenshot1.png",
    "/images/screenshot2.png",
    "/images/screenshot3.png",
    "/images/screenshot4.png",
]


function ImageTransition() {
    let counter = 0
    const [previewImage, setPreviewImage] = useState(images[counter])
    useEffect(() => {
        const interval = setInterval(() => {
            if(counter > 2) counter = 0
            else counter++
            setPreviewImage(images[counter])
        }, 6000);
        return () => clearInterval(interval);
      }, []);
    return (
        <div id="ImageTransition-id-d1">
                <img id="ImageTransition-id-d1i2" src={previewImage} alt="" />
        </div>
    );
}

export default ImageTransition;