import React from 'react';
import { connect } from 'react-redux';
import { Posts } from '../../components/List/Posts';

import { 
  ActionPostPage
} from '../../actions';

export default connect(
  (state) => ({
    posts: state['homePage'].getIn(['posts']).toJS(),
  }),
  (dispatch) => ({
  	onPostClick: (post) => {
      // console.log(post);
  		dispatch(ActionPostPage.Goto(dispatch, {post: post}));
  	},
  })
)(Posts);


