
import React, { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import CreatePost from '../CreatePost';
import { useDispatch, useSelector } from 'react-redux';
import { logOutFunction } from '../../store/user';
// import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const Outstyle = {
  height: '100vh',
  borderRight:'1px solid #eeeeee',
  width:'250px',
  display:'flex',
  paddingTop: '8px',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingBottom: '20px',
  flexDirection: 'column',
  position:'fixed'
}
const imageStyle ={
  width:"110px",
  paddingTop: '10px',
  paddingBottom: '10px'
}
const listStyle = {
  width: "250px",
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  display:'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  textDecoration: 'none',
  flexGrow: 1,
  fontFamily:'Helvetica, Arial, sans-serif',
  fontWeight:400,
  fontSize:'16px',
}
const iconStyle={
  marginRight: '15px',
  fontSize: '25px'
}
const itemStyle = {
  textDecoration: 'none',
  outline:'none',
  color: 'black',
  display: 'inline-flex',
  alignItems:'center',
  paddingTop: '20px',
  paddingBottom: '20px',
  marginBottom: '5px',
  marginTop:'5px',
}
const lastItemStyle = {
  textDecoration: 'none',
  outline:'none',
  color: 'black',
  marginBottom:'40px',
  paddingTop: '25px',
  paddingBottom: '25px',
  marginTop:'5px',
  display: 'inline-flex',
  alignItems:'center',
  fontFamily:'Helvetica, Arial, sans-serif',
  fontWeight:400,
  fontSize:'1em',
}
const profilePic = {
  width: "25px",
  height: '25px',
  borderRadius:"20px",
  marginRight: "15px",
  objectFit: "cover",
}



const NavBar = () => {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  let user = useSelector((state) => state.session)

  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logOutFunction());
    history.push('/')
  };

  if(!user){
    return null
  }
  else if (user?.preview_image.length < 10){
    user.preview_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  }

  return (
    <div >
      <nav style={Outstyle}>
        <img style={imageStyle} alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" />
        <ul style={listStyle}>
          <li>
            <NavLink to='/' exact={true} activeClassName='active' style={itemStyle}>
              <i style={iconStyle} className="fa-solid fa-house fa-lg"/>
              <div>Home</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/posts' exact={true} activeClassName='active' style={itemStyle}>
              <i style={iconStyle} className="fa-solid fa-magnifying-glass fa-lg"></i>
              <div>Search</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/explore' exact={true} activeClassName='active' style={itemStyle}>
              <i style={iconStyle} className="fa-regular fa-compass fa-lg"/>
              <div>Explore</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/messages' exact={true} activeClassName='active' style={itemStyle}>
            <i style={iconStyle} className="fa-brands fa-facebook-messenger fa-lg"></i>
              <div>Messages</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/notifications' exact={true} activeClassName='active' style={itemStyle}>
            <i style={iconStyle} className="fa-regular fa-heart fa-lg"/>
              <div>Notifications</div>
            </NavLink>
          </li>
          <li >
            <div activeClassName='active' style={itemStyle} onClick={() => setModal(true)}>
              <i style={iconStyle} className="fa-regular fa-square-plus fa-lg"/>
              <div>Create</div>
            </div>
            {
              modal && (
                <Modal onClose={() => setModal(false)}>
                  <CreatePost { ...{ setModal } }/>
                </Modal>
              )
            }
          </li>
          <li >
            <NavLink to='/users' exact={true} activeClassName='active' style={itemStyle}>
              <img alt='preview' src={user.preview_image} style={profilePic}></img>
              Profile
            </NavLink>
          </li>
          <li >
            <Link onClick={onLogout} to='/' style={itemStyle}>
              Logout
            </Link>
          </li>
        </ul>
        <NavLink to='/more' exact={true} activeClassName='active' style={lastItemStyle} className='more'>
          <i style={iconStyle} className="fa-solid fa-bars fa-lg"/>
          <div>More</div>
        </NavLink>
      </nav>
    </div>
  );
}
export default NavBar;
