import {combineReducers} from 'redux';
import user from './reducerUser';
import loginPage from './reducerLoginPage';
import modalNormal from './reducerModalNormal';

const rootReducer = combineReducers({
  user,
  loginPage,
  modalNormal,
});

export default rootReducer;
