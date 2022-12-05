import React, { useState }  from 'react'
import ImageComponent from "./FeedPostComponents/ImageComponent"
import FeedPostButtons from './FeedPostComponents/InteractionButtonComponent/FeedPostButtons'
import "./Post.css"
import { Link } from 'react-router-dom'
import { Modal } from '../../../../context/Modal'
import PostDetail from '../PostDetail/PostDetail'

function Post({ post }) {

    let today = Date.parse(new Date())
    let unixTimeZero = Date.parse(post.created_at)

    let diff = today - unixTimeZero
    let diffindays = Math.floor((diff) / (24 * 3600 * 1000))
    let diffinhours = Math.floor(diff / (3600 * 1000))

    const [showModal, setShowModal] = useState(false);

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
                <ImageComponent images={post.Media} />
            </section>

            <section className='post-interaction-section'>
                <FeedPostButtons />
            </section>


            <section className='post-body-section'>
                <div className='post-detail-likes'>{post.likes} likes</div>

                <div className='post-detail-caption-body'>
                    <div id='post-detail-username'>{post.Owner.username}</div>
                    <div id='post-detail-caption'>{post.caption}</div>
                </div>

                <Link className='post-comment-count' onClick={()=>setShowModal(true)}>View all {post.comments} comments</Link>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <PostDetail />
                    </Modal>
                )}
                {diffinhours > 23
                    ? <div className='post-time'>{diffindays > 1 ? `${diffindays} DAYS AGO` : `1 DAY AGO`}</div>
                    : <div className='post-time'>{diffinhours > 1 ? `${diffinhours} HOURS AGO` : `1 HOUR AGO`}</div>
                }
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
