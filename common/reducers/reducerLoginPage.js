import { handleActions } from 'redux-actions';
import { LoginPageState } from '../constants/Models'

import {
  LOGIN_PAGE_SET_EMAIL,
  LOGIN_PAGE_SET_PW
} from '../constants/ActionTypes';

const reducerLoginPage = handleActions({
	LOGIN_PAGE_SET_EMAIL: (state, {payload}) => (
		state.set('email', payload.value)
  ),
  LOGIN_PAGE_SET_PW: (state, {payload}) => (
		state.set('password', payload.value)
  )
}, LoginPageState);

export default reducerLoginPage;

