import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import session from './session'
import postReducer from "./posts"
import sessionReducer from './user';
import userReducer from './userV1';
import followerReducer from './followers';
import singlePostReducer from './singlepost';
import replyReducer from "./reply"
import commentReducer from "./comments"
import likeReducer from './likes';
import mediaReducer from './media'


const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  posts: postReducer,
  singlePost: singlePostReducer,
  replies: replyReducer,
  comments: commentReducer,
  likes: likeReducer,
  follows: followerReducer,
  medias: mediaReducer
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
