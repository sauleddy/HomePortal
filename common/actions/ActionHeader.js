import { createAction } from 'redux-actions';

import { 
	HEADER_UPDATE_CONTENT,
} from '../constants/ActionTypes';

const UpdateContent = createAction(HEADER_UPDATE_CONTENT);

const ActionHeader = {
	UpdateContent: UpdateContent
};

export { ActionHeader }
