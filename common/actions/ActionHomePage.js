import { createAction } from 'redux-actions';

import { 
	HOME_PAGE_UPDATE_POSTS,
} from '../constants/ActionTypes';

const UpdatePosts = createAction(HOME_PAGE_UPDATE_POSTS);

const ActionHomePage = {
	UpdatePosts: UpdatePosts
};

export { ActionHomePage }
