import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../../../context/Modal'

import ImageComponent from "./FeedPostComponents/ImageComponent"
import FeedPostButtons from './FeedPostComponents/InteractionButtonComponent/FeedPostButtons'
import ViewLikesModal from './FeedPostComponents/ViewLikesComponent'
import PostDetail from '../PostDetail/PostDetail'
import CreateCommentForm from '../../../CreateComment/CreateCommentForm.js'

import "./Post.css"

function Post({ post, user }) {

    let today = Date.parse(new Date())
    let unixTimeZero = Date.parse(post?.created_at)

    let diff = today - unixTimeZero
    let diffindays = Math.floor((diff) / (24 * 3600 * 1000))
    let diffinhours = Math.floor(diff / (3600 * 1000))

    const [showPostModal, setShowPostModal] = useState(false);
    let [wasLiked, setWasLiked] = useState(post?.likeStatus);
    // let [inPostDetail, setInPostDetail] = useState(false)



    return (
        <div className='individual-post-container'>

            <section className='post-header-section'>
                <div className='post-user-card'>
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/profile/${post?.userId}`} exact={true} activeClassName='active'>
                        <div id='user-profile-image'>
                            {post?.Owner?.previewImage ? <img className='user-preview-image' src={post?.Owner?.previewImage} alt={post?.id} /> : <div><i className="fa-regular fa-circle-user fa-2x"></i></div>}
                        </div>
                    </NavLink>
                    <div id='post-user-detail'>
                        {/* Need to create link to username to take to profile page */}
                        <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/profile/${post?.userId}`} exact={true} activeClassName='active'>
                            <div id='user-username'>{post?.Owner?.username}</div>
                        </NavLink>
                        {post?.location && <div id='post-location'>{post?.location}</div>}
                    </div>
                </div>
                <div className='post-more-options'>
                    <div id="post-more-options-icon"><i className="fa-solid fa-ellipsis fa-1x"></i></div>
                </div>
            </section>


            <section id='post-image-section'>
                <ImageComponent images={post?.Media} />
            </section>


            <section className='post-interaction-section'>
                <FeedPostButtons post={post} user={user} wasLiked={wasLiked} setWasLiked={setWasLiked} inPostDetail={true} />

            </section>


            <section className='post-body-section'>
                <ViewLikesModal post={post} />

                <div className='post-detail-caption-body'>
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/profile/${post?.userId}`} exact={true} activeClassName='active'>
                        <div id='post-detail-username'>{post?.Owner?.username}</div>
                    </NavLink>
                    <div id='post-detail-caption'>{post?.caption}</div>
                </div>

                <Link className='post-comment-count' onClick={() => setShowPostModal(true)}>View all {post?.comments} comments</Link>
                {showPostModal && (
                    <Modal onClose={() => setShowPostModal(false)}>
                        <PostDetail post={post} user={user} wasLiked={wasLiked} setWasLiked={setWasLiked} inPostDetails={true} />
                    </Modal>
                )}

                {diffinhours > 23
                    ? <div className='post-time'>{diffindays > 1 ? `${diffindays} DAYS AGO` : `1 DAY AGO`}</div>
                    : <div className='post-time'>{diffinhours > 1 ? `${diffinhours} HOURS AGO` : `1 HOUR AGO`}</div>
                }
            </section>


            <CreateCommentForm
                itemId={post.id}
            ></CreateCommentForm>

        </div>
    )

}

export default Post;
