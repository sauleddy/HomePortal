import compose from 'koa-compose'
import Router from 'koa-router'
import HTMLtoJSX from 'htmltojsx'
import gsjson from 'google-spreadsheet-to-json';
import { GoogleAuthHelper, GoogleDocsHelper, CredentialHelper } from '../utility';

import {
	API_TYPE_UTILITY,
	API_CMD_HTML_TO_JSX,
	API_CMD_GET_GOOGLE_SPREADSHEETS,
	API_CMD_GET_GOOGLE_DOCS,
	API_CMD_GET_GOOGLE_AUTH,
	API_CMD_GET_CREDENTIAL
} from '../../common/constants/Apis';

const router = new Router({prefix: API_TYPE_UTILITY})

router.post(API_CMD_HTML_TO_JSX, async function(ctx, next) {
	// console.log(ctx.request.body.html);
  let converter = new HTMLtoJSX({
    createClass: false,
    outputClassName: 'AwesomeComponent'
  });
  let jsx = converter.convert(ctx.request.body.html);
  ctx.response.body = jsx;
});

router.post(API_CMD_GET_GOOGLE_SPREADSHEETS, async function(ctx, next) {
	// console.log(ctx.request.body);
	try {
		let result = await gsjson({spreadsheetId: ctx.request.body.key, hash: 'postid'});
		ctx.response.body = result;	
	} catch(e) {
		console.log(`[utility.js] Failed to getGoogleSpreadSheets:`);
		console.log(e);
	}
});

router.get(`${API_CMD_GET_GOOGLE_DOCS}/:docsid`, async function(ctx, next) {
	// console.log(ctx.params.docsid);

	try {
		let html = await GoogleDocsHelper.get_instance().getDocsHtml(ctx.params.docsid);
		ctx.response.set('Content-Type', 'text/html; charset=utf-8'); 
		ctx.response.body = html;	
	} catch(e) {
		console.log(`[utility.js] ${API_CMD_GET_GOOGLE_DOCS}:${e.message}`);
		ctx.response.body = '500 Internal Server Error';	
	}
});

/*import { 
  GOOGLE_DRIVE_CLIENT_ID,
  GOOGLE_DRIVE_CLIENT_SECRET
} from '../../common/constants/Credential';

let myGoogleAuth = new GoogleAuthHelper({clientId: GOOGLE_DRIVE_CLIENT_ID, clientSecret: GOOGLE_DRIVE_CLIENT_SECRET});

router.get(API_CMD_GET_GOOGLE_AUTH, async function(ctx, next) {
	let code = ctx.request.query.code;
	if(code) {
		let drive = myGoogleAuth.GetAuthDrive(code);
	}
});*/

router.post(API_CMD_GET_CREDENTIAL, async function(ctx, next) {
	let myCredentialHelper = new CredentialHelper();
	let credential = await myCredentialHelper.GetCredential();
  // console.log(credential);
	ctx.response.body = credential;
});

export default router
