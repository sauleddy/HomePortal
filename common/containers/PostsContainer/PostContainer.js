import React from 'react';
import { connect } from 'react-redux';
import { Post } from '../../components/List/Posts';

export default connect(
  (state) => ({
    docsUrl: state['postPage'].getIn(['docsUrl']),
    resource: state['postPage'].getIn(['resource']),
  }),
  (dispatch) => ({
  })
)(Post);


