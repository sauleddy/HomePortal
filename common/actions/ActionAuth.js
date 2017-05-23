import { createAction } from 'redux-actions';
import { ActionJobAuthIns } from '../actions_job';

import { 
	AUTH_START
} from '../constants/ActionTypes';

const AuthStart = createAction(AUTH_START, ActionJobAuthIns.Login.bind(ActionJobAuthIns));

const ActionAuth = {
	AuthStart: AuthStart
};

export { ActionAuth }


