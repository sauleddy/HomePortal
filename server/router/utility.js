import compose from 'koa-compose'
import Router from 'koa-router'
import HTMLtoJSX from 'htmltojsx'
import gsjson from 'google-spreadsheet-to-json';
import { GoogleAuth } from '../utility/GoogleAuth';

import { 
	API_CMD_HTML_TO_JSX,
	API_CMD_GET_GOOGLE_SPREADSHEETS,
	API_CMD_GET_GOOGLE_DOCS,
	API_CMD_GET_GOOGLE_AUTH
} from '../../common/constants/Apis';

const router = new Router({prefix: '/utility'})

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
		let result = await gsjson({spreadsheetId: ctx.request.body.key});
		ctx.response.body = result;	
	} catch(e) {
		console.log(`[utility.js] Failed to getGoogleSpreadSheets:`);
		console.log(e);
	}
});

router.post(API_CMD_GET_GOOGLE_DOCS, async function(ctx, next) {
	console.log(ctx.request.body);
	/*try {
		let result = await gsjson({spreadsheetId: ctx.request.body.key});
		ctx.response.body = result;	
	} catch(e) {
		console.log(`[utility.js] Failed to getGoogleSpreadSheets:`);
		console.log(e);
	}*/
});

import { 
  GOOGLE_DRIVE_CLIENT_ID,
  GOOGLE_DRIVE_CLIENT_SECRET
} from '../../common/constants/Credential';

let myGoogleAuth = new GoogleAuth({clientId: GOOGLE_DRIVE_CLIENT_ID, clientSecret: GOOGLE_DRIVE_CLIENT_SECRET});

router.get(API_CMD_GET_GOOGLE_AUTH, async function(ctx, next) {
	let code = ctx.request.query.code;
	if(code) {
		let drive = myGoogleAuth.GetAuthDrive(code);
	}
});

export default router
