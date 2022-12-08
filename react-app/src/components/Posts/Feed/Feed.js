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

    // let feed = useSelector((state) => Object.values(state?.posts)) || ""
    let feed = useSelector((state) => state?.posts?.post) || ""
    let user = useSelector((state) => state?.session) || ""

    if (!feed) {
        return null;
    }

    return (
        <section className='feed-section'>
            <section className='post-feed-container'>
                {feed.map((post) => {
                    return (
                        <Post key={post.id} post={post} user={user}/>
                    )
                })}
            </section>
        </section>
    )
}

export default Feed;