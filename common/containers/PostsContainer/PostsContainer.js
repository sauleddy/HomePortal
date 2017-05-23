import React from 'react';
import { connect } from 'react-redux';
import { Posts } from '../../components/List/Posts';

import { 
  ActionPosts
} from '../../actions';

export default connect(
  (state) => ({
    posts: state['homePage'].getIn(['posts']),
  }),
  (dispatch) => ({
  	onPostClick: (postid, resource) => (
  		dispatch(ActionPosts.GetPost(dispatch, postid, resource))
    ),
  })
)(Posts);


