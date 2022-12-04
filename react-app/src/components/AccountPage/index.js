import { useEffect } from "react";
import { loadAllPostsByUserId } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
// import Post from "../Posts/Post";
import { Redirect, useParams } from "react-router-dom";
import {
  fetchFollower,
  // fetchCreateFollower,
  fetchMinusFollower,
  fetchPlusFollower,
} from "../../store/followers";
import { getUserFunction } from "../../store/userV1";

const AccountPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getUserFunction(id));
    dispatch(fetchFollower(id));
    dispatch(loadAllPostsByUserId(id));
    //       dispatch(loadAllPostsByUserId(accountId));
  }, [dispatch]);
  const account = useSelector((state) => state.user);
  //   const posts = Object.values(useSelector((state) => state.posts));
  //   const sessionUser = useSelector((state) => state.session);
  //   const followers = Object.values(
  //     useSelector((state) => state.follows)
  //   );
  //   //fix or fix reducer
  //   const following = Object.values(
  //     useSelector((state) => state.users[accountId].following)
  //   );
  //   //fix
  //   // if (!sessionUser?.id) {
  //   //   return <Redirect to="/" />;
  //   //redirect should return to sign up/log in page, but not sure what url will be
  //   // } else if (sessionUser?.id === accountId) {
  //   //   return <Redirect to="/users/current/posts" />;
  //   // }
  //   //url might be different on frontend for profile page, worried that will flash below return on load

  //   const followAccount = async (e) => {
  //     e.preventDefault();

  //     // if (following.includes(accountId)) {
  //     await dispatch(fetchPlusFollower(accountId));
  //     // } else if (!following.includes(accountId)) {
  //     //   await dispatch(fetchCreateFollower(accountId));
  //     // }
  //   };

  //   const unfollowAccount = async (e) => {
  //     e.preventDefault();

  //     if (!followers.includes(sessionUser?.id))
  //       await dispatch(fetchMinusFollower(account.id));
  //   };

  return (
    <>
      <img src={account?.preview_image} alt="Account Profile Picture" />
      <p>{account?.username}</p>
      <p>
        {account?.first_name} {account?.last_name}
      </p>
      {/* {!followers.includes(sessionUser?.id) && (
        <button onClick={followAccount}>Follow</button>
      )} */}
      {/* //       {followers.includes(sessionUser?.id) && ( */}
      {/* //         <button onClick={unfollowAccount}>Unfollow</button>
    //       )} */}
      {/* toggle button depending whether or not follower already */}
      {/* //       <span>posts</span>
    //       <span>followers</span>
    //       <span>following</span>
    //       {/* add aggregates */}
      {/* //       <span>{account?.username}</span>
    //       <p>{account?.biography}</p>
    //       <span>Posts</span>
    //       <hr />
    //       <hr />
    //       <ul>
    //         {posts.map((post) => ( */}
      {/* */}
      {/* //           <li key={post.id}>
    //             <Post />
    //           </li>
    //         ))} */}{" "}
      {/* posts should be wrapped in a link to the modal, on hover it should show numbers of likes and comments */}
      {/* //       </ul> */}
      {/* // <span>About</span> */}
      {/* link to github repo */}
    </>
  );
};

export default AccountPage;
