import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
// import createLogger from 'redux-logger';
import DevTools from '../utils/DevTools'
import Immutable from 'immutable';

//const initialState = Immutable.Map();
//export default function configureStore(preloadedState = initialState) {
export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
          applyMiddleware(thunk),
          DevTools.instrument()
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')

            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
