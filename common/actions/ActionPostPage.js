import { createAction } from 'redux-actions';
import { ActionJobPostPageIns } from '../actions_job';

import { 
	POST_PAGE_GOTO,
	POST_PAGE_UPDATE_POST,
	POST_PAGE_UPDATE_CONTENT,
	POST_PAGE_CLEAR,
} from '../constants/ActionTypes';

const Goto = createAction(POST_PAGE_GOTO, ActionJobPostPageIns.Goto.bind(ActionJobPostPageIns));
const UpdatePost = createAction(POST_PAGE_UPDATE_POST);
const UpdateContent = createAction(POST_PAGE_UPDATE_CONTENT);
const Clear = createAction(POST_PAGE_CLEAR);

const ActionPostPage = {
	Goto: Goto,
	UpdatePost: UpdatePost,
	UpdateContent: UpdateContent,
	Clear: Clear
};

export { ActionPostPage }
