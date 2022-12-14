// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
import HomePage from "./components/HomePage";
import Index from "./components/LandingPage/Index";
import CreatePost from "./components/CreatePost";
// import LoginForm from './components/Starter/auth/LoginForm';
// import SignUpForm from './components/Starter/auth/SignUpForm';
import NavBar from "./components/Starter/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { sessionFunction } from "./store/user";
import AccountPage from "./components/AccountPage";
// import ProtectedRoute from './components/Starter/auth/ProtectedRoute';
// import UsersList from './components/Starter/UsersList';
// import User from './components/Starter/User';
// import { authenticate } from './store/session';
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFoundPage/NotFound";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.session);
  const [authenticate, setAuthenticate] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(sessionFunction());
  //     setLoaded(true);
  //   })();
  // }, [dispatch]);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionFunction());
  }, [dispatch]);

  useEffect(() => {
    if (user) setAuthenticate(true);
    else setAuthenticate(false);
  }, [user]);

  // if (!loaded) return null;
  // if(!user) return null

  return (
    <>
      {/* {authenticate && <HomePage />}
      {!authenticate && <Index />} */}

      {!authenticate && <Index />}
      {authenticate && (
        <>
          <NavBar />
          <Switch>
            <Route exact path={"/"}>
              <HomePage />
            </Route>
            <Route exact path={"/postform"}>
              <CreatePost />
            </Route>
            <Route path="/my/profile" exact={true}>
              <ProfilePage />
            </Route>
            <Route path="/profile/:id" exact={true}>
              <AccountPage />
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </>
      )}
    </>

    // <BrowserRouter>
    // //   <NavBar />
    // //   <Switch>
    // //     <Route path='/login' exact={true}>
    // //       <LoginForm />
    // //     </Route>
    // //     <Route path='/sign-up' exact={true}>
    // //       <SignUpForm />
    // //     </Route>
    // //     <ProtectedRoute path='/users' exact={true} >
    // //       <UsersList/>
    // //     </ProtectedRoute>
    // //     <ProtectedRoute path='/users/:userId' exact={true} >
    // //       <User />
    // //     </ProtectedRoute>
    // //     <Route path='/' exact={true} >
    // //       <h1>My Home Page</h1>
    // //     </Route>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
