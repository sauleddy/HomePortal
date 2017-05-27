import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
// import createLogger from 'redux-logger';
import DevTools from '../utils/DevTools'
import Immutable from 'immutable';
// import persistState, {mergePersistedState} from 'redux-localstorage';
// import { serialize, deserialize } from 'redux-localstorage-immutable';
import { save, load } from 'redux-localstorage-simple';

// const initialState = Immutable.Map();
// export default function configureStore(preloadedState = initialState) {
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
      DevTools.instrument()
    ) 
    
  } else {
    const enhancer = compose(
      applyMiddleware(thunk),
      DevTools.instrument(),
    );
    
    store = createStore(
      rootReducer,
      preloadedState,
      enhancer
    );  
  }
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers')

        store.replaceReducer(nextRootReducer)
    })
  }
  return store;
}
