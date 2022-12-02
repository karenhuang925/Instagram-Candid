import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllPosts } from '../../../store/posts'
import "./Feed.css"

function Feed() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAllPosts())
    }, [dispatch])



    let feed = useSelector((state) => state.posts.post)

    if (!feed) {
        return null;
    }

  
    return (
        <section className='feed-section'>
            <section className='post-feed-container'>
                {Object.keys(feed).map((postId) => {

                    // Need to add NavLinks to icons

                    return (
                        <div className='individual-post-container' key={postId}>

                            <section className='post-header-section'>
                                <div className='post-user-card'>
                                    <div id='user-profile-image'>
                                        {/* Need to make user image conditional conditional to display location or null show nothing*/}
                                        {/* <div><i className="fa-regular fa-circle-user fa-2x"></i></div> */}
                                        <img
                                            className='user-preview-image'
                                            src={feed[postId].Owner.previewImage}
                                            key={postId}
                                            alt={postId + 1}
                                        />
                                    </div>
                                    <div id='post-user-detail'>
                                        {/* Need to make location conditional to display location or null show nothing*/}
                                        <div id='user-username'>{feed[postId].Owner.username}</div>
                                        <div id='post-location'>{feed[postId].location}</div>
                                    </div>
                                </div>
                                <div className='post-more-options'>
                                    <div><i className="fa-solid fa-ellipsis fa-1x"></i></div>
                                </div>
                            </section>

                            <section id='post-image-section' key={postId}>
                                {/* Need to create capability to have and scroll through multiple images */}
                                <img
                                    className='post-media'
                                    src={feed[postId].Media[0].media_file}
                                    key={postId}
                                    alt={postId + 1}
                                />
                            </section>

                            <section className='post-interaction-section'>
                                <div id='post-interaction-button-container'>
                                    <div id='interaction-button'><i className="fa-regular fa-heart fa-1x"></i></div>
                                    <div id='interaction-button'><i className="fa-regular fa-comment fa-1x"></i></div>
                                    <div id='interaction-button'><i className="fa-regular fa-paper-plane fa-1x"></i></div>
                                </div>

                                <div id='post-interaction-button-container'>
                                    <div id='interaction-button'><i className="fa-regular fa-bookmark fa-1x"></i></div>
                                </div>
                            </section>


                            <section className='post-body-section'>
                                <div className='post-detail-likes'>Count of likes</div>

                                <div className='post-detail-caption-body'>
                                    <div id='post-detail-username'>{feed[postId].Owner.username}</div>
                                    <div id='post-detail-caption'>{feed[postId].caption}</div>
                                </div>

                                <div className='post-comment-count'>View all COUNT comments</div>
                                <div className='post-time'>Time HOURS or DAY or DAYS AGO</div>
                            </section>


                            <section className='post-comment-section'>
                                <form className='post-comment-form'>
                                    <input
                                        className='post-comment-input'
                                        type='text'
                                        placeholder='Add a comment...'
                                    />
                                    <button className='post-comment-button'>Post</button>
                                </form>
                            </section>
                        </div>
                    )
                })}
            </section>
        </section>
    )
}

// import * as postStoreSliceAction from '../../../store/posts'
// import Post from "../Post"

    // useEffect(() => {
    //     (async() => {
    //         await dispatch(loadAllPosts())
    //     })();
    // }, [dispatch]);

  // return (
    //     <>
    //         {Object.keys(feed).map(postId => (
    //             <Post key={postId} userProfileImage={feed[postId].Owner.previewImage} />
    //         ))}
    //     </>
    // )

export default Feed;