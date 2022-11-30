import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as postStoreSliceAction from '../../../store/posts'
import "./Feed.css"

function Feed() {
    const dispatch = useDispatch()

    useEffect(() => {
        (async() => {
            await dispatch(postStoreSliceAction.loadAllPosts())
        })();
    }, [dispatch]);

    let allPosts = useSelector((state) => state?.posts?.post) || ''

    return (
        <div className='post-feed-container'>
            {Object.keys(allPosts).map((postId) => {
                return (
                    <div className='individual-post' key={postId}>
                        TEST
                    </div>
                )
            })}

        </div>
    )
}

export default Feed;