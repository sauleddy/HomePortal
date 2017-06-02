import { handleActions } from 'redux-actions';
import { PostPageState } from '../constants/Models'

import {
  POST_PAGE_UPDATE_POST,
  POST_PAGE_UPDATE_CONTENT,
  POST_PAGE_CLEAR
} from '../constants/ActionTypes';

const reducerPostPage = handleActions({
	POST_PAGE_UPDATE_CONTENT: (state, {payload}) => {
		// console.log(payload);
    return state.merge({
      docsUrl: payload.post.docsUrl,
      resource: payload.post.resource
    });
  },
  POST_PAGE_UPDATE_POST: (state, {payload}) => {
  	return state.merge({
      post: payload.post
    });
  },
  POST_PAGE_CLEAR: (state) => {
    return PostPageState;
  }
}, PostPageState);

export default reducerPostPage;

