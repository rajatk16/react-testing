import React from 'react'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

const store = createStore(
  reducers, {
    comments: [
      "Hello World",
      "Wassup"
    ]
  }, 
  applyMiddleware(reduxPromise)
);

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}