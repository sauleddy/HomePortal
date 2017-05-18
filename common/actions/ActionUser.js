import { createAction } from 'redux-actions';
import { ApiUserIns } from '../webapi';

import { 
	AUTH_START
} from '../constants/ActionTypes';

const AuthStart = createAction(AUTH_START, ApiUserIns.Login);

const ActionUser = {
	AuthStart: AuthStart
};

export { ActionUser }


