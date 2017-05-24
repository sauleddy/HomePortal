import { ActionJobBase } from './ActionJobBase';
import { StorageAWS } from '../utils/Storage';
import { PostHelperGoogle } from '../utils/PostHelper';
import { browserHistory } from 'react-router';

import { 
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} from '../constants/Credential';

import {
  AWS_URL,
  AWS_BUCKET,
  AWS_RESOURCE_DIR
} from '../constants/Storage';

import {
  Warning
} from '../constants/Strings';

import { 
  ActionHomePage,
  ActionModalNormal,
  ActionPostPage
} from '../actions';

import {
  STATUS_OK,
  STATUS_EXEPTION
} from '../constants/Status';

import {
  GOOGLEDRIVE_POST_MENU_ID
} from '../constants/Storage';

import {
  API_UTILITY_GET_GOOGLE_DOCS
} from '../constants/Apis';

class ActionJobPosts extends ActionJobBase {
  constructor() {
    super();

    let authInfo = { accessKeyId:AWS_ACCESS_KEY_ID, secretAccessKey:AWS_SECRET_ACCESS_KEY };
    this.myStorage = new StorageAWS(authInfo);
    this.PostHelper = new PostHelperGoogle(this.myStorage);
  }

  GetPostMenu(dispatch) {
    // console.log(`[ApiStorage] GetPostMenu`);
    
    this.PostHelper.getPostMenu({key: GOOGLEDRIVE_POST_MENU_ID})
    .then(function (response) {
      // console.log(response);
      if(response.status == STATUS_OK) {
        dispatch(ActionHomePage.UpdatePosts({ posts: response.posts }));
      } else {
        dispatch(ActionModalNormal.Show({ title: Warning, content:`status:${response.status}` }));
      }
    });
  }

  GetPost(dispatch, postid, resource) {
    console.log(`[ActionJobPosts] GetPost postid:${postid} resource:${resource}`);

    let result = {status: STATUS_OK, post: {}};
    result.post.docsUrl = `${API_UTILITY_GET_GOOGLE_DOCS}/${postid}`;
    result.post.imgs = [];
    dispatch(ActionPostPage.Update({ post: result.post }));
    browserHistory.push('/post');
    
    /*this.PostHelper.getPostContent({contentkey: postid, imagekey:resource})
    .then(function (response) {
      console.log(response);
      if(response.status == STATUS_OK) {
        browserHistory.push('/post');
        
        dispatch(ActionPostPage.Update({ post: response.post }));
      } else {
        dispatch(ActionModalNormal.Show({ title: Warning, content:`status:${response.status}` }));
      }
    });*/
  }

};

let ActionJobPostsIns = new ActionJobPosts();

export { ActionJobPosts, ActionJobPostsIns }