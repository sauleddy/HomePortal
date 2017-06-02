import Immutable from 'immutable';

export const LoginPageState = Immutable.fromJS({
  email: 'sauleddy@gmail.com',
  password: '12345678'
});

export const HeaderState = Immutable.fromJS({
  title: `Ed's Family`,
  subtitle: `Welcome to Ed's family`,
  image: `cleanblog/img/home.jpg`
  // image: `https://s3-ap-northeast-1.amazonaws.com/eajsfamilyportal/public/home.jpg`
});

export const HomePageState = Immutable.fromJS({
  posts: {}
});

export const PostPageState = Immutable.fromJS({
  post: {}, docsUrl: '', resource: []
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