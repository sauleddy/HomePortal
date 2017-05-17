import { createAction } from 'redux-actions';

import { 
	LOGIN_PAGE_SET_EMAIL,
	LOGIN_PAGE_SET_PW
} from '../constants/ActionTypes';

const SetEmail = createAction(LOGIN_PAGE_SET_EMAIL);
const SetPw = createAction(LOGIN_PAGE_SET_PW);

const ActionLoginPage = {
	SetEmail: SetEmail,
	SetPw: SetPw
};

export { ActionLoginPage }
