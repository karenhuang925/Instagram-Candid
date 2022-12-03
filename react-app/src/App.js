// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import HomePage from "./components/HomePage"
import Index from './components/alonso/Index';
// import LoginForm from './components/Starter/auth/LoginForm';
// import SignUpForm from './components/Starter/auth/SignUpForm';
import NavBar from './components/Starter/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { sessionFunction } from "./store/user"
// import ProtectedRoute from './components/Starter/auth/ProtectedRoute';
// import UsersList from './components/Starter/UsersList';
// import User from './components/Starter/User';
// import { authenticate } from './store/session';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session);
  const [loaded, setLoaded] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() =>{
    (async() => {
      await dispatch(sessionFunction());
      setLoaded(true);
    })(); 
  }, [dispatch]);

  useEffect(() => {
    if(user) setAuthenticate(true)
    else setAuthenticate(false)
  }, [user])

  if (!loaded) return null;
  return (
    <>
      {
        authenticate && <HomePage />
      }
      {
        !authenticate && <Index />
      }
    </>
    // <BrowserRouter>
    //   <NavBar />
    //   <Switch>
    //     <Route path='/login' exact={true}>
    //       <LoginForm />
    //     </Route>
    //     <Route path='/sign-up' exact={true}>
    //       <SignUpForm />
    //     </Route>
    //     <ProtectedRoute path='/users' exact={true} >
    //       <UsersList/>
    //     </ProtectedRoute>
    //     <ProtectedRoute path='/users/:userId' exact={true} >
    //       <User />
    //     </ProtectedRoute>
    //     <Route path='/' exact={true} >
    //       <h1>My Home Page</h1>
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  )
}

export default App;
