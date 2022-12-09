import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../context/Modal'

import ImageComponent from "./FeedPostComponents/ImageComponent"
import FeedPostButtons from './FeedPostComponents/InteractionButtonComponent/FeedPostButtons'
import ViewLikesModal from './FeedPostComponents/ViewLikesComponent'
import PostDetail from '../PostDetail/PostDetail'

import "./Post.css"

function Post({ post, user }) {

    let today = Date.parse(new Date())
    let unixTimeZero = Date.parse(post.created_at)

    let diff = today - unixTimeZero
    let diffindays = Math.floor((diff) / (24 * 3600 * 1000))
    let diffinhours = Math.floor(diff / (3600 * 1000))

    const [showPostModal, setShowPostModal] = useState(false);
    let [wasLiked, setWasLiked] = useState(post.likeStatus);
    // let [inPostDetail, setInPostDetail] = useState(false)

    return (
        <div className='individual-post-container'>

            <section className='post-header-section'>
                <div className='post-user-card'>
                    <div id='user-profile-image'>
                        {post.Owner.previewImage ? <img className='user-preview-image' src={post.Owner.previewImage} alt={post.id}/> : <div><i className="fa-regular fa-circle-user fa-2x"></i></div>}
                    </div>
                    <div id='post-user-detail'>
                        <div id='user-username'>{post.Owner.username}</div>
                        {post.location && <div id='post-location'>{post.location}</div>}
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
                <FeedPostButtons post={post} user={user} wasLiked={wasLiked} setWasLiked={setWasLiked} inPostDetail={true}/>
            </section>


            <section className='post-body-section'>
                <ViewLikesModal post={post}/>

                <div className='post-detail-caption-body'>
                    <div id='post-detail-username'>{post.Owner.username}</div>
                    <div id='post-detail-caption'>{post.caption}</div>
                </div>

                <Link className='post-comment-count' onClick={() => setShowPostModal(true)}>View all {post.comments} comments</Link>
                {showPostModal && (
                    <Modal onClose={() => setShowPostModal(false)}>
                        <PostDetail  post={post} wasLiked={wasLiked} setWasLiked={setWasLiked} inPostDetails={true}/>
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
