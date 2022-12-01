import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import * as postStoreSliceAction from '../../../store/posts'
import { loadAllPosts } from '../../../store/posts'
import "./Feed.css"

function Feed() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAllPosts())
    }, [dispatch])

    // useEffect(() => {
    //     (async() => {
    //         await dispatch(loadAllPosts())
    //     })();
    // }, [dispatch]);

    let feed = useSelector((state) => state.posts.post)

    if (!feed) {
        return null;
      }


    return (
        <div className='post-feed-container'>
            {Object.keys(feed).map((postId) => {
                return (
                    <div className='individual-post-container' key={postId}>

                        <div id='post-title-header' key={postId}>
                            <div id='post-profile-image-and-username' key={postId}>
                                <h3>ProfilePicture</h3>
                                <h3>ProfileName</h3>
                            </div>
                            <div id='post-more-options'>
                                <h3>...</h3>
                            </div>
                        </div>

                        <div id='post-image' key={postId}>
                            <img
                                className='post_media'
                                src={feed[postId].Media[0].media_file}
                                key={postId}
                            />
                        </div>

                        <div></div>
                    </div>
                )
            })}
        </div>
    )
}

{/* <h3>{`${allPosts[postId].userId}`}</h3> */}
export default Feed;