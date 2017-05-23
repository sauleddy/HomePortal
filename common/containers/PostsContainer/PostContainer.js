import React from 'react';
import { connect } from 'react-redux';
import { Post } from '../../components/List/Posts';

export default connect(
  (state) => ({
    innerBody: state['postPage'].getIn(['post', 'html']),
  }),
  (dispatch) => ({
  })
)(Post);


