import React from 'react'
import "./ImageScroll.css"
import { useState } from 'react'


function ImageComponent({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;

    const nextImage = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }

    const prevImage = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    }

    if (!Array.isArray(images) || images.length <= 0) return null

    return (
        <div className='image-swiper'>
            {length > 1 && <div className='right-arrow' onClick={nextImage}><i className="fa-solid fa-rotate-right fa-2x"></i></div>}
            {length > 1 && <div className='left-arrow' onClick={prevImage}><i class="fa-solid fa-rotate-left fa-2x"></i></div>}
            {images.map((image, index) => {
                return (
                    <div className='image-container' key={index}>
                        {index === currentIndex &&
                            <img
                                className='post-media'
                                src={image.media_file}
                                key={image.id}
                                alt='aPicture'
                            />
                        }
                    </div>
                )
            })}
        </div>
    )
}


export default ImageComponent;