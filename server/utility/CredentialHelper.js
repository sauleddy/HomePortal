var google = require('googleapis');
let fs = require('fs');
let path = require('path');

class CredentialHelper {
  constructor() {
	}

  GetCredential() {
    return new Promise(function (resolve, reject) {
      let access_key = process.env.AWS_ACCESS_KEY_ID;
      let secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;
      if(access_key === undefined || secret_access_key === undefined) {
        // console.log(__dirname);
        let envFile = `${__dirname}/../../.env`;
        let file = fs.readFileSync(envFile, 'utf-8');
        if (!file) {
          reject(err);
        }
        const keyAccessKey = 'AWS_ACCESS_KEY_ID=';
        const keySecretAccessKey = 'AWS_SECRET_ACCESS_KEY=';
        
        let strArray = file.split("\n");
        for(let i=0; i<strArray.length; ++i) {
          if(strArray[i].startsWith(keyAccessKey)) {
            access_key = strArray[i].replace(keyAccessKey, "");  
          } else if(strArray[i].startsWith(keySecretAccessKey)) {
            secret_access_key = strArray[i].replace(keySecretAccessKey, "");  
          }
        }
        // console.log(access_key);
        // console.log(secret_access_key);
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