const API_ROOT = '/api';
const API_TYPE_AUTH = '/auth';
const API_TYPE_UTILITY = '/utility';

const API_CMD_LOGIN = '/login';
const API_CMD_HTML_TO_JSX = '/htmltojsx';
const API_CMD_GET_GOOGLE_SPREADSHEETS = '/getGoogleSpreadSheets';
const API_CMD_GET_GOOGLE_DOCS = '/getGoogleDocs';
const API_CMD_GET_GOOGLE_AUTH = '/getGoogleAuth';
const API_CMD_GET_CREDENTIAL = '/getCredential';

const API_AUTH_LOGIN = `${API_ROOT}${API_TYPE_AUTH}${API_CMD_LOGIN}`;
const API_UTILITY_HTML_TO_JSX = `${API_ROOT}${API_TYPE_UTILITY}${API_CMD_HTML_TO_JSX}`;
const API_UTILITY_GET_GOOGLE_SPREADSHEETS = `${API_ROOT}${API_TYPE_UTILITY}${API_CMD_GET_GOOGLE_SPREADSHEETS}`;
const API_UTILITY_GET_GOOGLE_DOCS = `${API_ROOT}${API_TYPE_UTILITY}${API_CMD_GET_GOOGLE_DOCS}`;
const API_UTILITY_GET_CREDENTIAL = `${API_ROOT}${API_TYPE_UTILITY}${API_CMD_GET_CREDENTIAL}`;

export default {
	API_ROOT,
	API_TYPE_AUTH,
	API_TYPE_UTILITY,

	API_CMD_LOGIN,
	API_CMD_HTML_TO_JSX,
	API_CMD_GET_GOOGLE_SPREADSHEETS,
	API_CMD_GET_GOOGLE_DOCS,
	API_CMD_GET_GOOGLE_AUTH,
	API_CMD_GET_CREDENTIAL,
	
	API_AUTH_LOGIN,
	API_UTILITY_HTML_TO_JSX,
	API_UTILITY_GET_GOOGLE_SPREADSHEETS,
	API_UTILITY_GET_GOOGLE_DOCS,
	API_UTILITY_GET_CREDENTIAL
}
