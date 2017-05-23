
import { HttpHelper } from '../HttpHelper';

class PostHelperBase {
	constructor(storage) {
		if(new.target === PostHelperBase) {
			throw new Error('PostHelperBase is an abstract class');
		}
		this.myStorage = storage;
		this.httpHelper = new HttpHelper();
	}

	/*
		[IN]
		postInfo 
		=> 
		key : the key of post menu
		https://spreadsheets.google.com/feeds/list/${postInfo.key}/od6/public/values?alt=json

		[OUT]
		status: status_code,
		posts: [
			{title: '', subtitle: '', date: '', author: '', postid: '', imageurl: '', resource: ''},
			...
		]
	*/
	async getPostMenu(postInfo) {
	}

	/*
		[IN]
		postInfo 
		=> 
		contentkey : the key of post content
		https://docs.google.com/feeds/download/documents/export/Export?id=${postInfo.contentkey}&exportFormat=html'
		imagekey : the key of post images
		https://s3-ap-northeast-1.amazonaws.com/eajsfamilyportal/resource/${imagekey}

		[OUT]
		status: status_code,
		post : {html: '', imgs: ['', '', '', ...]}
	*/
	async getPostContent(postInfo) {

	}

}

export { PostHelperBase }

