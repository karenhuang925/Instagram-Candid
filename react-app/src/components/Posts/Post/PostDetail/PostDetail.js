import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './PostDetail.css'
import ImageComponent from '../FeedPost/FeedPostComponents/ImageComponent/index'
import { loadPostById } from '../../../../store/singlepost';
import { loadCommentsByPostId } from '../../../../store/comments'
import FeedPostButtons from '../FeedPost/FeedPostComponents/InteractionButtonComponent/FeedPostButtons';
import { loadFollowing } from '../../../../store/followers';
import ViewLikesModal from '../FeedPost/FeedPostComponents/ViewLikesComponent/ViewLikesModal'
import { fetchLike } from '../../../../store/likes'
import ViewReply from './ViewReply'
import CreateCommentForm from '../../../CreateComment/CreateCommentForm'
import EditCommentForm from '../../../CreateComment/EditCommentForm'
import CommentReplyActionModal from '../../../CommentReplyActionModal/CommentReplyActionModal'

function PostDetail({ post, wasLiked, setWasLiked , inPostDetails}) {
    const dispatch = useDispatch()
    let user = useSelector((state) => state.session)

    //comment and reply useState
    let [contectType, setContentType] = useState('comment')
    let [actionType, setActionType] = useState('post')
    let [itemId, setItemId] = useState(0)

    useEffect(() => {
        // dispatch(loadPostById(post.id))
        dispatch(loadCommentsByPostId(post.id))
        dispatch(fetchLike(post.id))
        dispatch(loadFollowing(user.id))
    }, [dispatch])

    // let post = useSelector((state) => state.singlePost.post)
    let allComments = useSelector((state) => state.comments.comment)
    // let following = useSelector((state) => state.follows.following)
    // let likes = useSelector((state) => state.likes.likes)



    if (!post) { return null; }
    if (!allComments) { return null; }

    //timedisplay
    let today = Date.parse(new Date())
    let unixTimeZero = Date.parse(post.created_at)

    let diff = today - unixTimeZero

    let diffinyears = Math.floor(diff / (365 * 3600 * 1000))
    let diffinmonths = Math.floor(diff / (30 * 24 * 3600 * 1000))
    let diffindays = Math.floor((diff) / (24 * 3600 * 1000))
    let diffinhours = Math.floor(diff / (3600 * 1000))

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    let createdAt = new Date(post.created_at).toDateString(undefined, options);



    return (
        <section className='modal-outer'>
            <div className='image'>
                <div className='imageComp'>
                    <ImageComponent images={post.Media} ></ImageComponent>
                </div>
            </div>
            <div className='info'>
                <div className='userinfo'>
                    <img alt='preview' src={post.Owner.previewImage} className='detail-profile-pic'></img>
                    <div class='usernameAndLocation'>
                        <p className='username'>{post.Owner.username}</p>
                        <p className='location'>{post.location}</p>
                    </div>
                    <div><i className="fa-solid fa-ellipsis fa-1x"></i></div>
                </div>

                <div className='postinfo'>
                    <div className='captionAndComments'>
                        <div className='caption-card'>
                            <img alt='preview' src={post.Owner.previewImage} className='detail-profile-pic'></img>
                            <div>
                                <div className='usernameAndCaption'>
                                    <p className='caption-username'>{post.Owner.username}</p>
                                    <div >{post.caption}</div>
                                </div>
                                <div>{diffinhours > 23
                                    ? <div id='bold' className='post-time'>{diffindays > 1 ? `${diffindays} DAYS AGO` : `1 DAY AGO`}</div>
                                    : <div id='bold' className='post-time'>{diffinhours > 1 ? `${diffinhours} HOURS AGO` : `1 HOUR AGO`}</div>
                                }</div>
                            </div>
                        </div>
                        <div className='comments'>
                            {Object.values(allComments).map((comment) => {
                                let commentunixTimeZero = Date.parse(comment.created_at)
                                let commentdiff = today - commentunixTimeZero
                                let commentdiffindays = Math.floor((commentdiff) / (24 * 3600 * 1000))
                                let commentdiffinhours = Math.floor(commentdiff / (3600 * 1000))
                                return (
                                    <div key={comment.id} className='caption-card'>
                                        <img alt='preview' src={comment.Owner.preview_image} className='detail-profile-pic'></img>
                                        <div>
                                            <div className='usernameAndCaption'>
                                                <p className='caption-username'>{comment.Owner.username}</p>
                                                <div >{comment.comment}</div>
                                            </div>
                                            <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                                                <div >{commentdiffinhours > 23
                                                    ? <div id='bold' className='post-time'>{commentdiffindays > 1 ? `${commentdiffindays}d` : `1d`}</div>
                                                    : <div id='bold' className='post-time' >{commentdiffinhours > 1 ? `${commentdiffinhours}h` : `1h`}</div>
                                                }</div>
                                                <div className='post-time' id='bold'>Reply</div>
                                                {comment.user_id == user.id &&
                                                <CommentReplyActionModal item={comment} setActionType={setActionType} setItemId={setItemId}/>
                                                }
                                            </div>
                                            {comment.numOfReplies > 0 &&
                                                <ViewReply comment={comment}></ViewReply>}
                                        </div>
                                    </div>)
                            })
                            }
                        </div>
                    </div>
                    <div className='actionButton'>
                        <FeedPostButtons post={post} user={user} wasLiked={wasLiked} setWasLiked={setWasLiked} inPostDetail={inPostDetails}/>
                    </div>
                    <div style={{'paddingLeft': '16px'}}>
                        <ViewLikesModal post={post} id='inpost'/>
                    </div>
                    <div className='created-at'>{
                        diffinyears > 1
                            ? <div>{createdAt}</div>
                            : diffindays > 30
                                ? <div className='post-time'>{diffinmonths > 1 ? `${diffinhours} MONTHS AGO` : `1 MONTH AGO`}</div>
                                : diffinhours > 23
                                    ? <div className='post-time'>{diffindays > 1 ? `${diffindays} DAYS AGO` : `1 DAY AGO`}</div>
                                    : <div className='post-time'>{diffinhours > 1 ? `${diffinhours} HOURS AGO` : `1 HOUR AGO`}</div>
                    }</div>
                    {actionType == 'post' ? (
                        <CreateCommentForm className='addComment' itemId={post.id}></CreateCommentForm>
                    ) : (
                        <EditCommentForm className='addComment' itemId={itemId} setActionType={setActionType}></EditCommentForm>
                    )}
                </div>
            </div>
        </section>
    );
}

export default PostDetail;
