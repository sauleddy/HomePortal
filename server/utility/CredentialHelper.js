var google = require('googleapis');
let fs = require('fs')

import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} from '../../common/constants/Credential';

class CredentialHelper {
  constructor() {
	}

  GetCredential() {
    return new Promise(function (resolve, reject) {
      let access_key = process.env.AWS_ACCESS_KEY_ID;
      let secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;
      if(access_key === undefined || secret_access_key === undefined) {
        access_key = AWS_ACCESS_KEY_ID;
        secret_access_key = AWS_SECRET_ACCESS_KEY;
        /*console.log(__dirname);
        let file = fs.readFileSync('../../.env');
        if (!file) {
          reject(err);
        }
        console.log(file);*/
      }
      let credential = {
        aws_access_key_id: access_key,
        aws_secret_access_key: secret_access_key
      };
      if(!credential) reject(err);
      resolve(credential);
    });
  }
}

export { CredentialHelper }