
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
  API_UTILITY_GET_GOOGLE_SPREADSHEETS
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

	async getPostContent(postInfo) {
		let result = {status: STATUS_OK, post: {}};
		try {
			let url = `${GOOGLEDRIVE_DOCS_URL}${postInfo.contentkey}&exportFormat=html`;
			let response = await this.httpHelper.DownloadFile(url);
			if(response.status != STATUS_OK) {
				result.status = response.status;
				return result;
			}
			let body = parseHtml(response.data);
			result.post.html = body;
			result.post.imgs = [];
			// console.log(body);
			
		} catch(e) {
			result.status = STATUS_EXEPTION;	
		}
		return result;
	}
}

function parseHtml(doc) {
	let styleStart = '<style type="text/css">';
  let styleEnd = '</style>';
  let splitStyleStart = doc.split(styleStart);
  let splitStyleEnd = splitStyleStart[1].split(styleEnd);

  let htmlStart = '<body ';
  let htmlStart2 = '>';
  let htmlEnd = '</body>';
  let splitHtmlStart = splitStyleEnd[1].split(htmlStart);
  let splitHtmlStart2 = splitHtmlStart[1].split(htmlStart2);
  let htmlClass = splitHtmlStart2[0];
  let htmlStartFull = htmlStart + htmlClass + htmlStart2;
  splitHtmlStart = splitStyleEnd[1].split(htmlStartFull);
  let splitHtmlEnd = splitHtmlStart[1].split(htmlEnd);

  let styles = styleStart + splitStyleEnd[0] + styleEnd;
  let html = '<div >' + splitHtmlEnd[0] + '</div>';
  let body = styles + html;
  return body;
}

export { PostHelperGoogle }
