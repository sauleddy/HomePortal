import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';

/*import { 
  ActionLoginPage,
  ActionUser
} from '../../actions';*/

export default connect(
  (state) => ({
    //email: state['loginPage'].getIn(['email']),
    //password: state['loginPage'].getIn(['password']),
  }),
  (dispatch) => ({
    /*onChangedEmail: (event) => (
      dispatch(ActionLoginPage.SetEmail({ value: event.target.value }))
    ),
    onChangedPw: (event) => (
      dispatch(ActionLoginPage.SetPw({ value: event.target.value }))
    ),
    onLoginClick: (email, password) => () => (
      dispatch(ActionUser.AuthStart(dispatch, email, password))
      // dispatch(showSpinner())
    ),*/
  })
)(Footer);


