// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import HomePage from "./components/HomePage"
// import LoginForm from './components/Starter/auth/LoginForm';
// import SignUpForm from './components/Starter/auth/SignUpForm';
import NavBar from './components/Starter/NavBar';
// import ProtectedRoute from './components/Starter/auth/ProtectedRoute';
// import UsersList from './components/Starter/UsersList';
// import User from './components/Starter/User';
// import { authenticate } from './store/session';

function App() {
  // const dispatch = useDispatch();
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   (async() => {
  //     await dispatch(authenticate());
  //     setLoaded(true);
  //   })();
  // }, [dispatch]);

  // if (!loaded) {
  //   return null;
  // }

  return (
      <Switch>
        {/* <NavBar /> */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

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
  );
}

export default App;
