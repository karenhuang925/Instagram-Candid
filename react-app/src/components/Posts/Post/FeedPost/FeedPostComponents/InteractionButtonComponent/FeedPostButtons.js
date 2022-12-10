import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { Modal } from '../../../../../../context/Modal'
import { addTheLikeToPost, minusTheLikeToPost } from "../../../../../../store/posts";
import PostDetail from "../../../PostDetail/PostDetail";
import "./FeedPostButtons.css"

function FeedPostButtons({ post, user, wasLiked, setWasLiked, inPostDetail }) {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(post?.likeStatus)
    const [showPostModal, setShowPostModal] = useState(false);
    // let liked = useSelector(state => state.posts.post[post.id].likeStatus)

    // if(!liked){
    //     return null
    // }


    const handleClick = (e) => {
        e.preventDefault();
        setLiked(!liked)
        if (wasLiked === false) {
            setWasLiked(!wasLiked)
            return dispatch(addTheLikeToPost(post?.id));
        }

        if (wasLiked === true) {
            const Likes = post?.Likes
            let userLike = Likes.find((like) => {
                return like?.user_id === user?.id
            })
            setWasLiked(!wasLiked)
            return dispatch(minusTheLikeToPost(userLike));
        }
    }

    return (
        <>
            <div id='post-interaction-button-container'>
                <div id='interaction-button'>
                    <button className={post?.likeStatus ? "LikeButtonLike" : "LikeButtonUnlike"} onClick={handleClick}><i className="fa-regular fa-heart fa-1x"></i></button>
                </div>

                {inPostDetail
                    ? <div id='interaction-button'><i className="fa-regular fa-comment fa-1x"></i></div>
                    : <Link id='interaction-button' onClick={() => setShowPostModal(true)}><div><i className="fa-regular fa-comment fa-1x"></i></div></Link>
                }

                {/* <Link id='interaction-button' onClick={() => setShowPostModal(true)}><div><i className="fa-regular fa-comment fa-1x"></i></div></Link> */}
                {showPostModal && (
                    <Modal onClose={() => setShowPostModal(false)}>
                        <PostDetail post={post} wasLiked={wasLiked} setWasLiked={setWasLiked} inPostDetail={true} />
                    </Modal>
                )}

                <div id='interaction-button'><i className="fa-regular fa-paper-plane fa-1x"></i></div>
            </div>

            <div id='post-interaction-button-container'>
                <div id='interaction-button'><i className="fa-regular fa-bookmark fa-1x"></i></div>
            </div>
        </>
    )
}

export default FeedPostButtons;
