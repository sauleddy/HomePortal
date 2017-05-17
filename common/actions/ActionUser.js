import { createAction } from 'redux-actions';
import { ApiUser } from '../webapi';

import { 
	AUTH_START
} from '../constants/ActionTypes';

const AuthStart = createAction(AUTH_START, ApiUser.Login);

const ActionUser = {
	AuthStart: AuthStart
};

export { ActionUser }


