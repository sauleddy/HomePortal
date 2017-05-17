import { handleActions } from 'redux-actions';
import { UserState } from '../constants/Models'

import {
  AUTH_START,
} from '../constants/ActionTypes';

const reducerUser = handleActions({
  AUTH_START: (state) => (
		state.merge({
      isAuthorized: true,      
    })
  ),
  // AUTH_START: (state) => (
  //   //console.log(state);
  //   //return state;
  //   /*state.set(
  //     'spinnerVisible',
  //     true
  //   )*/
  // ) 
}, UserState);

export default reducerUser;

