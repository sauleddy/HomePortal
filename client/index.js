import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from '../common/routes'
import configureStore from '../common/store/'
import { fromJS } from 'immutable';

//console.log(window.REDUX_STATE);
//console.log(fromJS(window.REDUX_STATE));
const store = configureStore(fromJS(window.REDUX_STATE));
//console.log(store.getState());
//console.log(store.getState()['loginPage'].get('email'));

match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps}/>
        </Provider>,
        document.getElementById('root')
    )
})
