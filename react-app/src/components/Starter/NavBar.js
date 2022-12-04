
import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logOutFunction } from '../../store/user';
// import LogoutButton from './auth/LogoutButton';


const Outstyle = {
  height: '100vh',
  borderRight:'1px solid #eeeeee',
  width:'150px',
  display:'flex',
  paddingTop: '8px',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingBottom: '20px',
  flexDirection: 'column',
  position:'fixed'
}

const imageStyle ={
  width:"80px",
  paddingTop: '10px',
  paddingBottom: '10px'
}

const listStyle = {
  width: "80px",
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
}

const itemStyle = {
  textDecoration: 'none',
  outline:'none',
  color: 'black',
  display: 'inline-flex',
  alignItems:'center',
  paddingTop: '15px',
  paddingBottom: '15px'
}

const lastItemStyle = {
  textDecoration: 'none',
  outline:'none',
  color: 'black',
  paddingBottom:'25px',
  display: 'inline-flex',
  alignItems:'center',
  fontFamily:'Helvetica, Arial, sans-serif',
  fontWeight:400,
  fontSize:'0.75em',
}


const NavBar = () => {
  const history = useHistory();

  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logOutFunction());
    history.push('/')
  };

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
            <NavLink to='/post/create' exact={true} activeClassName='active' style={itemStyle}>
              <i style={iconStyle} className="fa-solid fa-magnifying-glass fa-lg"></i>
              <div>Search</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/post/create' exact={true} activeClassName='active' style={itemStyle}>
              <i style={iconStyle} className="fa-regular fa-compass fa-lg"/>
              <div>Explore</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/explore' exact={true} activeClassName='active' style={itemStyle}>
            <i style={iconStyle} className="fa-brands fa-facebook-messenger fa-lg"></i>
              <div>Messages</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/post/create' exact={true} activeClassName='active' style={itemStyle}>
            <i style={iconStyle} className="fa-regular fa-heart fa-lg"/>
              <div>Notifications</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/post/create' exact={true} activeClassName='active' style={itemStyle}>
            <i style={iconStyle} className="fa-regular fa-square-plus fa-lg"/>
              <div>Create</div>
            </NavLink>
          </li>
          <li >
            <NavLink to='/users' exact={true} activeClassName='active' style={itemStyle}>
              Profile
            </NavLink>
          </li>
          <li >
            <Link onClick={onLogout} to='/' style={itemStyle}>
              Logout
            </Link>
          </li>
        </ul>
        <NavLink to='/more' exact={true} activeClassName='active' style={lastItemStyle}>
          <i style={iconStyle} className="fa-solid fa-bars fa-lg"/>
          <div>More</div>
        </NavLink>
      </nav>
    </div>
  );
}
export default NavBar;
