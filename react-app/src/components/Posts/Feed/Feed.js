import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllPostsOfUsersFollowed } from '../../../store/posts'
import Post from "../Post/FeedPost"
import "./Feed.css"

function Feed() {
    const dispatch = useDispatch()


    let feed = useSelector((state) => state?.posts?.post) || ""
    let user = useSelector((state) => state?.session) || ""

    useEffect(() => {
        dispatch(loadAllPostsOfUsersFollowed())
    }, [dispatch])



    // let feed = useSelector((state) => Object.values(state?.posts)) || ""

    // if (!feed) {
    //     return null;
    // }

    return (
        <section className='feed-section'>
            <section className='post-feed-container'>
                {feed.length === 0  && (
                    <div className='post-feed-no-following'>Add Suggested Followers</div>
                )}

                {feed?.length > 0 &&
                    feed?.map((post) => {
                        return (
                            <Post key={post?.id} post={post} user={user} />
                        )
                    })}
            </section>
        </section>
    )
}

export default Feed;
