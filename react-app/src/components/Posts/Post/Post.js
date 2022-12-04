import React from 'react'
import "./Post.css"

function Post({ post }) {

    return (
        <div className='individual-post-container'>

            <section className='post-header-section'>
                <div className='post-user-card'>
                    <div id='user-profile-image'>
                        {/* Need to make user image conditional conditional to display location or null show nothing*/}
                        {/* <div><i className="fa-regular fa-circle-user fa-2x"></i></div> */}
                        <img
                            className='user-preview-image'
                            src={post.Owner.previewImage}
                            alt={post.id}
                        />
                    </div>
                    <div id='post-user-detail'>
                        {/* Need to make location conditional to display location or null show nothing*/}
                        <div id='user-username'>{post.Owner.username}</div>
                        <div id='post-location'>{post.location}</div>
                    </div>
                </div>
                <div className='post-more-options'>
                    <div><i className="fa-solid fa-ellipsis fa-1x"></i></div>
                </div>
            </section>

            <section id='post-image-section'>
                {/* Need to create capability to have and scroll through multiple images */}
                <img
                    className='post-media'
                    src={post.Media[0].media_file}
                    alt={post.id}
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
                    <div id='post-detail-username'>{post.Owner.username}</div>
                    <div id='post-detail-caption'>{post.caption}</div>
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

}

export default Post;
