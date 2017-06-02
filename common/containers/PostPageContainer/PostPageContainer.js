import React from 'react';
import { connect } from 'react-redux';
import PostPage from '../../components/PostPage';

import { 
  ActionHeader,
  ActionPosts
} from '../../actions';

export default connect(
  (state) => ({
  	post: state['postPage'].getIn(['post']).toJS(),
  }),
  (dispatch) => ({
  	onComponentDidMount: (post) => {
  		dispatch(ActionHeader.UpdateContent({ title: post.title, subtitle: post.subtitle
  			, image: post.imageurl }));
  		dispatch(ActionPosts.GetPost(dispatch, post));
  	},
  })
)(PostPage);


