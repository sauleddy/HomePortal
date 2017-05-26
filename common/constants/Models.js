import Immutable from 'immutable';

export const LoginPageState = Immutable.fromJS({
  email: 'sauleddy@gmail.com',
  password: '12345678'
});

export const HomePageState = Immutable.fromJS({
  posts: {}
});

export const PostPageState = Immutable.fromJS({
  post: {docsUrl: '', resource: []}
});

export const UserState = Immutable.fromJS({
  email: '',
  name: '',
  password: '',
  isAuthorized: false
});

export const ModalNormalState = Immutable.fromJS({
  visible: false,
  title: '',
  content: ''
});

import {
  STATUS_OK
} from '../constants/Status';

export const ModalResponse = Immutable.fromJS({
  status: STATUS_OK,
  data: {}
});