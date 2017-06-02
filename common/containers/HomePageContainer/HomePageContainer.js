import React from 'react';
import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { HeaderState } from '../../constants/Models'

import { 
  ActionPosts,
  ActionHeader,
  ActionPostPage,
} from '../../actions';

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  	onComponentWillMount: () => {
      dispatch(ActionPostPage.Clear());
    },
    onComponentDidMount: (node) => {
    	dispatch(ActionHeader.UpdateContent(HeaderState.toJS()));
      dispatch(ActionPosts.GetPostMenu(dispatch))
    },
  })
)(HomePage);

