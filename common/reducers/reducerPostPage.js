import { handleActions } from 'redux-actions';
import { PostPageState } from '../constants/Models'

import {
  POST_PAGE_UPDATE
} from '../constants/ActionTypes';

const reducerPostPage = handleActions({
	POST_PAGE_UPDATE: (state, {payload}) => (
		state.merge({
      post: payload.post
    })
  )
}, PostPageState);

export default reducerPostPage;

