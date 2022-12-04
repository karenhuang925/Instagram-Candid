import React from 'react'
import "./ImageScroll.css"
import { useState, useEffect } from 'react'


function ImageComponent({ images }) {
    // let imageState = {
    //     currentIndex: 0,
    //     movement: 0,
    // }

    const [currentIndex, setCurrentIndex] = useState(0)
    const [movement, setMovement] = useState(0)

    const handleMovement = (delta) => {

    }

    const handleWheel = (e) => {
        handleMovement(e.deltaX)
    }




    return (
        <div className='main-image-container' onWheel={handleWheel}>
            <div className='image-swiper'>
                {images.map((image) => {
                    return (
                        <img
                            className='post-media'
                            src={image.media_file}
                            key={image.id}
                            alt={null}
                        />
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