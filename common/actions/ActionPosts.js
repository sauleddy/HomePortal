import { createAction } from 'redux-actions';
import { ApiStorageIns } from '../webapi';

import { 
	STORAGE_GET_POSTS
} from '../constants/ActionTypes';

const GetPosts = createAction(STORAGE_GET_POSTS, ApiStorageIns.GetPosts.bind(ApiStorageIns));

const ActionPosts = {
	GetPosts: GetPosts,
};

export { ActionPosts }
