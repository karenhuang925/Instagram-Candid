import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import session from './session';
import postReducer from "./posts";
import userReducer from './user';
import followerReducer from './followers2';
import singlePostReducer from './singlepost';
import replyReducer from "./reply"
import commentReducer from "./comments"
import likeReducer from './likes';

const rootReducer = combineReducers({
  session,
  posts: postReducer,
  follower:followerReducer,
  user: userReducer,
  posts: postReducer,
  singlePost: singlePostReducer,
  replies: replyReducer,
  comments: commentReducer,
  likes: likeReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
