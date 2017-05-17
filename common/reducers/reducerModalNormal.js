import { handleActions } from 'redux-actions';
import { ModalNormalState } from '../constants/Models'

import {
  MODALNORMAL_SHOW,
  MODALNORMAL_HIDE
} from '../constants/ActionTypes';

const reducerModalNormal = handleActions({
	MODALNORMAL_SHOW: (state, {payload}) => (
		state.merge({
      title: payload.title,
      content: payload.content,
      visible: true,
    })
	),
  MODALNORMAL_HIDE: (state) => (
		state.set('visible', false)
  )
}, ModalNormalState);

export default reducerModalNormal;

