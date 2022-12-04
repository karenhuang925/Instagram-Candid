import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllPostsOfUsersFollowed } from '../../../store/posts'
import Post from "../Post/FeedPost"
import "./Feed.css"

function Feed() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAllPostsOfUsersFollowed())
    }, [dispatch])

    let feed = useSelector((state) => state.posts.post)

    if (!feed) {
        return null;
    }

    return (
        <section className='feed-section'>
            <section className='post-feed-container'>
                {Object?.keys(feed)?.map((postId) => {
                    return (
                        <Post key={postId} post={feed[postId]} />
                    )
                })}
            </section>
        </section>
    )
}

export default Feed;