import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import session from './session';
import postReducer from "./posts";
import userReducer from './user';
import singlePostReducer from './singlepost';
import replyReducer from "./reply"

const rootReducer = combineReducers({
  session,
  user: userReducer,
  posts: postReducer,
  singlePost: singlePostReducer,
  replies: replyReducer
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
