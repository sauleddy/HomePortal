
import { PostHelperBase } from './PostHelperBase';

import {
	AWS_URL,
	AWS_BUCKET,
	AWS_RESOURCE_DIR,
	GOOGLEDRIVE_DOCS_URL
} from '../../constants/Storage';

import {
  STATUS_OK,
  STATUS_FAILED,
  STATUS_EXEPTION
} from '../../constants/Status';

import {
  API_UTILITY_GET_GOOGLE_SPREADSHEETS,
  API_UTILITY_GET_GOOGLE_DOCS
} from '../../constants/Apis';

import {
  ModalResponse,
  ModalPostMenu
} from '../../constants/Models';

class PostHelperGoogle extends PostHelperBase {
	
	constructor(storage) {
		super(storage);
	}

	async getPostMenu(postInfo) {
		let response = { status: STATUS_OK, posts:{} };
		let resPostApi = await this.httpHelper.PostApi(
			{url: API_UTILITY_GET_GOOGLE_SPREADSHEETS, params: {key: postInfo.key}});
		response.status = resPostApi.status;
		if(resPostApi.status == STATUS_OK) {
			response.posts = resPostApi.data;
		} else {
			console.log(`[PostHelperGoogle.js] Failed to getPostMenu:${resPostApi.status}`);
		}
		return response;
	}

	async getPostResources(postInfo) {
		let response = { status: STATUS_OK, post:{ imgs: [] } };
		let key = `${AWS_RESOURCE_DIR}/${postInfo.imagekey}`;
		let files = await this.myStorage.listFiles(AWS_BUCKET, {Key: key});
		// console.log(files);
		for(let i=0; i<files.Contents.length; ++i) {
			// console.log(files.Contents[i]);
	  	if(!files.Contents[i].Key.endsWith("/")) {
	  		response.post.imgs.push(`${AWS_URL}${AWS_BUCKET}/${files.Contents[i].Key}`);
	  	} 
	  }
		return response;
	}

}

export { PostHelperGoogle }
