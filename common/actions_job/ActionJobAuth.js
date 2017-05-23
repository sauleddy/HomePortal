import axios from 'axios';
import { ActionJobBase } from './ActionJobBase';
import { browserHistory } from 'react-router';

import {
  API_AUTH_LOGIN
} from '../constants/Apis';

import { 
  ActionModalNormal
} from '../actions';

class ActionJobAuth extends ActionJobBase {
  constructor() {
    super();
  }

  Login(dispatch, email, password) {
    console.log('email:' + email + ', password:' + password);

    // const title = 'Warning';
    // const content = 'Failed to login.';
    // dispatch(ActionModalNormal.Show({ title: title, content:content }));
    
    // axios.post(API_AUTH_LOGIN, {email, password})
    // .then((response) => {
    //   console.log(response);
    //   if(response.data.success === false) {
    //   dispatch(authError()); 
    //   dispatch(hideSpinner());  
    //   alert('發生錯誤，請再試一次！');
    //   window.location.reload();        
    // } else {
    //   if (!document.cookie.token) {
    //     let d = new Date();
    //     d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    //     const expires = 'expires=' + d.toUTCString();
    //     document.cookie = 'token=' + response.data.token + '; ' + expires;
    //     dispatch(authComplete());
    //     dispatch(hideSpinner());  
    //     browserHistory.push('/'); 
    //   }
    // }
    // })
    // .catch(function (error) {
    //   //dispatch(authError());
    // });
  }
};

let ActionJobAuthIns = new ActionJobAuth();

export { ActionJobAuth, ActionJobAuthIns }