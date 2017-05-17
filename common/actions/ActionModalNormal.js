import { createAction } from 'redux-actions';

import { 
	MODALNORMAL_SHOW,
	MODALNORMAL_HIDE
} from '../constants/ActionTypes';

const Show = createAction(MODALNORMAL_SHOW);
const Hide = createAction(MODALNORMAL_HIDE);

const ActionModalNormal = {
	Show: Show,
	Hide: Hide
};

export { ActionModalNormal }
