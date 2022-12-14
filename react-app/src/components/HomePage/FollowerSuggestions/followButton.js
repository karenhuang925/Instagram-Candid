import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { fetchPlusFollower } from '../../../store/followers';
import {loadAllPostsOfUsersFollowed} from "../../../store/posts"

function FollowButton({ userId, followsUserId }) {
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(false);
    
    const handleFollow = async () => {
        await dispatch(fetchPlusFollower({userId, followsUserId})).then(()=>{dispatch(loadAllPostsOfUsersFollowed(userId))})
        setFollowed(!followed)
    }
    if (!followed){
        return (
            <Link className='action-link' onClick={handleFollow}>Follow</Link>
        )
    }
    if (followed){
        return(
            <p style={{'fontSize':'smaller', 'margin': '0px'}}>Following</p>
        )
    }
}
export default FollowButton;
