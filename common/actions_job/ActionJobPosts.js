import { ActionJobBase } from './ActionJobBase';
import { StorageAWS } from '../utils/Storage';
import { PostHelperGoogle } from '../utils/PostHelper';
import { browserHistory } from 'react-router';
import { HttpHelper } from '../utils/HttpHelper';

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
  API_UTILITY_GET_GOOGLE_DOCS,
  API_UTILITY_GET_CREDENTIAL
} from '../constants/Apis';

class ActionJobPosts extends ActionJobBase {
  constructor() {
    super();
  }

  async InitHelper() {
    if(this.myStorage === undefined || this.PostHelper === undefined) {
      try {
        let response = await getCredential();
        // console.log(response);
        if(response) {
          let authInfo = { accessKeyId:response.credential.aws_access_key_id
            , secretAccessKey:response.credential.aws_secret_access_key };
          // console.log(authInfo);
          this.myStorage = new StorageAWS(authInfo);
          this.PostHelper = new PostHelperGoogle(this.myStorage);  
        }
      } catch (e) {
        console.log(`[ActionJobPosts.js] InitHelper exception`);
      }
    }
  }

  async GetPostMenu(dispatch) {
    // console.log(`[ApiStorage] GetPostMenu`);
    
    try {
      await this.InitHelper();
      let response = await this.PostHelper.getPostMenu({key: GOOGLEDRIVE_POST_MENU_ID});
      // console.log(response);
      if(response.status == STATUS_OK) {
        dispatch(ActionHomePage.UpdatePosts({ posts: response.posts }));
      } else {
        dispatch(ActionModalNormal.Show({ title: Warning, content:`status:${response.status}` }));
      }
    } catch (e) {
      console.log(`[ActionJobPosts.js] GetPostMenu exception`);
    }
  }

  async GetPost(dispatch, post) {
    console.log(`[ActionJobPosts] GetPost:`);
    console.log(post);

    try {
      await this.InitHelper();
      let response = await this.PostHelper.getPostResources({contentkey: post.postid, imagekey:post.resource});
      console.log(response);
      if(response.status == STATUS_OK) {
        let result = {status: STATUS_OK, post: {}};
        result.post.docsUrl = `${API_UTILITY_GET_GOOGLE_DOCS}/${post.postid}`;
        result.post.resource = response.post.resource;
        dispatch(ActionPostPage.UpdateContent({ post: result.post }));
      } else {
        dispatch(ActionModalNormal.Show({ title: Warning, content:`status:${response.status}` }));
      }
    } catch (e) {
      console.log(`[ActionJobPosts.js] GetPost exception`);
    }
  }

};

async function getCredential() {
  let httpHelper = new HttpHelper();
  let response = { status: STATUS_OK, credential:{} };
  let resPostApi = await httpHelper.PostApi(
    {url: API_UTILITY_GET_CREDENTIAL, params: {}});
  response.status = resPostApi.status;
  if(resPostApi.status == STATUS_OK) {
    response.credential = resPostApi.data;
  } else {
    console.log(`[ActionJobPosts.js] Failed to getCredential:${resPostApi.status}`);
  }
  return response;
}

let ActionJobPostsIns = new ActionJobPosts();

export { ActionJobPosts, ActionJobPostsIns }