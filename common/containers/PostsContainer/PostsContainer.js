import React from 'react';
import { connect } from 'react-redux';
import { Posts } from '../../components/List/Posts';

export default connect(
  (state) => ({
    posts: state['homePage'].getIn(['posts']),
  }),
  (dispatch) => ({
  })
)(Posts);


