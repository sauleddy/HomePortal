import { createAction } from 'redux-actions';

import { 
	POST_PAGE_UPDATE
} from '../constants/ActionTypes';

const Update = createAction(POST_PAGE_UPDATE);

const ActionPostPage = {
	Update: Update
};

export { ActionPostPage }
