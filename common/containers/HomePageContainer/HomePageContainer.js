import React from 'react';
import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';

import { 
  ActionPosts,
} from '../../actions';

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    onComponentDidMount: (node) => (
    	dispatch(ActionPosts.GetPosts(dispatch, 'tours'))
    ),
  })
)(HomePage);

