import { createAction } from 'redux-actions';
import { ActionJobPostsIns } from '../actions_job';

import { 
	STORAGE_GET_POST_MENU,
	STORAGE_GET_POST,
} from '../constants/ActionTypes';

const GetPostMenu = createAction(STORAGE_GET_POST_MENU, ActionJobPostsIns.GetPostMenu.bind(ActionJobPostsIns));
const GetPost = createAction(STORAGE_GET_POST, ActionJobPostsIns.GetPost.bind(ActionJobPostsIns));

const ActionPosts = {
	GetPostMenu: GetPostMenu,
	GetPost: GetPost,
};

export { ActionPosts }
