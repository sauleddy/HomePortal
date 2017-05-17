import React from 'react';
import { connect } from 'react-redux';
import { Post } from '../../components/List/Posts';

/*import { 
  ActionModalNormal
} from '../../actions';*/

export default connect(
  (state) => ({
    /*title: state['modalNormal'].getIn(['title']),
    content: state['modalNormal'].getIn(['content']),
    visible: state['modalNormal'].getIn(['visible']),*/
  }),
  (dispatch) => ({
    /*onOkClick: () => (
      dispatch(ActionModalNormal.Hide())
    ),*/
  })
)(Post);


