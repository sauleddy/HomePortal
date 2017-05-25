import { handleActions } from 'redux-actions';
import { HomePageState } from '../constants/Models'

import {
  LOGIN_PAGE_SET_EMAIL,
  LOGIN_PAGE_SET_PW
} from '../constants/ActionTypes';

const reducerHomePage = handleActions({
	HOME_PAGE_UPDATE_POSTS: (state, {payload}) => (
		state.merge({
      posts: payload.posts
    })
	)
}, HomePageState);

export default reducerHomePage;

