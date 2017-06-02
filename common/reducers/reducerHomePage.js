import { handleActions } from 'redux-actions';
import { HomePageState } from '../constants/Models'

import {
  HOME_PAGE_UPDATE_POSTS,
} from '../constants/ActionTypes';

const reducerHomePage = handleActions({
	HOME_PAGE_UPDATE_POSTS: (state, {payload}) => (
		state.merge({
      posts: payload.posts
    })
	)
}, HomePageState);

export default reducerHomePage;

