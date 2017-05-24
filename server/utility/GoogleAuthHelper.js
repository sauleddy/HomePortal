var google = require('googleapis');

class GoogleAuthHelper {
  /*
    [IN]
    authInfo
    =>
    clientId: ''
    clientSecret: ''
  */
	constructor(authInfo) {
		this.authInfo = authInfo;

    var OAuth2 = google.auth.OAuth2;
    this.oauth2Client = new OAuth2(
      this.authInfo.clientId,
      this.authInfo.clientSecret,
      'http://localhost:3000/api/utility/getGoogleAuth'
    );
	}

  GetAuthUrl() {
    var url = this.oauth2Client.generateAuthUrl({
      scope: this.authInfo.scopes,
    });
    return url;
  }

  GetAuthDrive(code) {
    return new Promise(function (resolve, reject) {
      this.oauth2Client.getToken(code, function(err, tokens) {
        if (!err) {
          oauth2Client.setCredentials(tokens);
          var drive = google.drive({
            version: 'v2',
            auth: oauth2Client
          });
          resolve(drive);
        } else {
          console.log(`Failed to GetAuthDrive:${err}`);
          reject(err);
        }
      });
    });
  }

}

export { GoogleAuthHelper }