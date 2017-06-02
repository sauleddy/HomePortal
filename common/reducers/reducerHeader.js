import { handleActions } from 'redux-actions';
import { HeaderState } from '../constants/Models'

import {
  HEADER_UPDATE_CONTENT
} from '../constants/ActionTypes';

const reducerHeader = handleActions({
	HEADER_UPDATE_CONTENT: (state, {payload}) => (
		state.merge({
      title: payload.title,
      subtitle: payload.subtitle,
      image: payload.image,
    })
	)
}, HeaderState);

export default reducerHeader;

