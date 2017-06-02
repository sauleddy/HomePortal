import {combineReducers} from 'redux';
import user from './reducerUser';
import loginPage from './reducerLoginPage';
import header from './reducerHeader';
import homePage from './reducerHomePage';
import postPage from './reducerPostPage';
import modalNormal from './reducerModalNormal';

const rootReducer = combineReducers({
  user,
  loginPage,
  header,
  homePage,
  postPage,
  modalNormal,
});

export default rootReducer;
