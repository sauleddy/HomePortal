import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';

import { 
  ActionHeader
} from '../../actions';

export default connect(
  (state) => ({
  	title: state['header'].getIn(['title']),
    subtitle: state['header'].getIn(['subtitle']),
    image: state['header'].getIn(['image']),
  }),
  (dispatch) => ({
  })
)(Header);

