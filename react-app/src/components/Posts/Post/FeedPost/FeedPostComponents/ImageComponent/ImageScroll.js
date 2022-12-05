import React from 'react'
import "./ImageScroll.css"
import { useState, useEffect } from 'react'


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
        <div className='main-image-container'>
            <div className='image-swiper'>
                <div className='right-arrow' onClick={nextImage}><i className="fa-solid fa-rotate-right fa-2x"></i></div>
                <div className='left-arrow' onClick={prevImage}><i class="fa-solid fa-rotate-left fa-2x"></i></div>
                {images.map((image, index) => {
                    return (
                        <div>
                            {index === currentIndex && (
                                <img
                                    className='post-media'
                                    src={image.media_file}
                                    key={image.id}
                                    alt='aPicture'
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// <img
//     className='post-media'
//     src={image[0].media_file}
//     // alt={post.id}
// />

// {image.length > 1 &&}
// <img
//             className='post-media'
//             src={post.Media[0].media_file}
//             alt={post.id}
//         />


export default ImageComponent;