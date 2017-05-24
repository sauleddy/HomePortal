const API_BASE_AUTH = '/api/auth';
const API_BASE_UTILITY = '/api/utility';

const API_CMD_LOGIN = '/login';
const API_CMD_HTML_TO_JSX = '/htmltojsx';
const API_CMD_GET_GOOGLE_SPREADSHEETS = '/getGoogleSpreadSheets';
const API_CMD_GET_GOOGLE_DOCS = '/getGoogleDocs';
const API_CMD_GET_GOOGLE_AUTH = '/getGoogleAuth';

const API_AUTH_LOGIN = `${API_BASE_AUTH}${API_CMD_LOGIN}`;
const API_UTILITY_HTML_TO_JSX = `${API_BASE_UTILITY}${API_CMD_HTML_TO_JSX}`;
const API_UTILITY_GET_GOOGLE_SPREADSHEETS = `${API_BASE_UTILITY}${API_CMD_GET_GOOGLE_SPREADSHEETS}`;
const API_UTILITY_GET_GOOGLE_DOCS = `${API_BASE_UTILITY}${API_CMD_GET_GOOGLE_DOCS}`;

export default {
	API_CMD_LOGIN,
	API_CMD_HTML_TO_JSX,
	API_CMD_GET_GOOGLE_SPREADSHEETS,
	API_CMD_GET_GOOGLE_DOCS,
	API_CMD_GET_GOOGLE_AUTH,
	
	API_AUTH_LOGIN,
	API_UTILITY_HTML_TO_JSX,
	API_UTILITY_GET_GOOGLE_SPREADSHEETS,
	API_UTILITY_GET_GOOGLE_DOCS
}
