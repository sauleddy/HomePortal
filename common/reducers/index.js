import {combineReducers} from 'redux';
import user from './reducerUser';
import loginPage from './reducerLoginPage';
import homePage from './reducerHomePage';
import modalNormal from './reducerModalNormal';

const rootReducer = combineReducers({
  user,
  loginPage,
  homePage,
  modalNormal,
});

export default rootReducer;
