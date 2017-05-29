import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from '../common/routes'
import configureStore from '../common/store/'
import { fromJS } from 'immutable';

console.log(window.REDUX_STATE);

// localStorage.setItem('homeportal', JSON.stringify(window.REDUX_STATE));

for(let key in window.REDUX_STATE){
  // console.log(key);
  // console.log(window.REDUX_STATE[key]);
  window.REDUX_STATE[key] = fromJS(window.REDUX_STATE[key]);
}
const store = configureStore(window.REDUX_STATE);
// console.log(store.getState());
// let data = JSON.parse(localStorage.getItem('homeportal'));
// console.log(data);

//console.log(store.getState()['loginPage'].get('email'));
//console.log(store.getState()['loginPage'].get('email'));

match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
  render(
      <Provider store={store}>
          <Router {...renderProps}/>
      </Provider>,
      document.getElementById('root')
  )
})
