import { ActionJobBase } from './ActionJobBase';
import { browserHistory } from 'react-router';

import { 
  ActionPostPage
} from '../actions';

class ActionJobPostPage extends ActionJobBase {
  constructor() {
    super();
  }

  Goto(dispatch, post) {
    dispatch(ActionPostPage.UpdatePost(post));
    browserHistory.push('/post');  
  }
};

let ActionJobPostPageIns = new ActionJobPostPage();

export { ActionJobPostPage, ActionJobPostPageIns }