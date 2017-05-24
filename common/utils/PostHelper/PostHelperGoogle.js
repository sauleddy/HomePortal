
import { PostHelperBase } from './PostHelperBase';

import {
	AWS_URL,
	AWS_BUCKET,
	AWS_RESOURCE_DIR,
	GOOGLEDRIVE_DOCS_URL
} from '../../constants/Storage';

import {
  STATUS_OK,
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
		let response = ModalPostMenu.toJS();
		let resPostApi = await this.httpHelper.PostApi(
			{url: API_UTILITY_GET_GOOGLE_SPREADSHEETS, params: {key: postInfo.key}});
		// console.log(resPostApi)
		response.status = resPostApi.status;
		if(resPostApi.status == STATUS_OK) {
			response.posts = resPostApi.data;
		} else {
			console.log(`[PostHelperGoogle.js] Failed to getPostMenu:${resPostApi.status}`);
		}
		return response;
	}
}

export { PostHelperGoogle }
