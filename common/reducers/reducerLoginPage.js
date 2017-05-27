import { handleActions } from 'redux-actions';
import { LoginPageState } from '../constants/Models';
// import { REHYDRATE } from 'redux-persist/constants';

import {
  LOGIN_PAGE_SET_EMAIL,
  LOGIN_PAGE_SET_PW
} from '../constants/ActionTypes';

function setEmail(state, action) {
	// console.log('setEmail');
	// console.log(action);
	// console.log(state);
	return state.set('email', action.payload.value);
}

function setPw(state, action) {
	// console.log('setPw');
	// console.log(state);
	return state.set('password', action.payload.value);
}

/* function rehydrate(state, action) {
	console.log('rehydrate');
	console.log(state);
	console.log(action);
	// return state.set('password', action.payload.value);
} */

const reducerLoginPage = handleActions({
	LOGIN_PAGE_SET_EMAIL: setEmail,
  LOGIN_PAGE_SET_PW: setPw
}, LoginPageState);

export default reducerLoginPage;

