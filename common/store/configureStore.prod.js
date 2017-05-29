import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { save, load } from 'redux-localstorage-simple';

export default function configureStore(preloadedState) {
    let store;

    if(typeof(localStorage) !== 'undefined')
    {
        const createStoreWithMiddleware 
          = applyMiddleware(
            thunk,
            save({ states: ["postPage"] })
          )(createStore);

        store = createStoreWithMiddleware(
          rootReducer, 
          load({ states: ["postPage"], immutablejs: true }),
        ) 

    } else {
        const enhancer = compose(
          applyMiddleware(thunk),
        );

        store = createStore(
          rootReducer,
          preloadedState,
          enhancer
        );  
    }

    return store;
}
