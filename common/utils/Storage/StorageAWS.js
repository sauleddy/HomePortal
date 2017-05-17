
import StorageBase from './StorageBase'
import AWS from 'aws-sdk'
import { Sleep } from '../Sleep'

class StorageAWS extends StorageBase {
	
	constructor(authInfo) {
		super(authInfo);
		// console.log(authInfo);
		AWS.config.update({
      accessKeyId: authInfo.accessKeyId,
      secretAccessKey: authInfo.secretAccessKey
    });
	}

	async uploadFiles(bucket, fileinfos, fn) {
		try {
			let res = [];
			let s3 = createS3(bucket);
			for(let i=0; i<fileinfos.length; ++i) {
				let resThis = await uploadFile(s3, fileinfos[i]);
				// console.log(resThis);
				res.push({Key:fileinfos[i].Key, Res:resThis});
			}
			fn(null, res);
		} catch(e) {
			fn(e);
		}
	}

	async deleteFiles(bucket, fileinfos, fn) {
		try {
			let s3 = createS3(bucket);
			let resThis = await deleteFilesInner(s3, bucket, fileinfos);
			// console.log(resThis);
			fn(null, resThis);
		} catch(e) {
			fn(e);
		}	
	}
}

function createS3(bucket) {
	let s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: bucket}
  });
  return s3;
}

function uploadFile(s3, fileinfo) {
	return new Promise(function (resolve, reject) {
		console.log(`uploading file:${fileinfo.Key}`);
		//Sleep.getInstance().sleep(3000);
		//resolve(fileinfo);
		//reject(new Error('failed'));
		s3.upload({
      Key: fileinfo.Key,
      Body: fileinfo.Body,
      ACL: 'public-read'
    }, function(err, data) {
      if (err) reject(err);
    	resolve(data);
    });
  });
}

function deleteFilesInner(s3, bucket, fileinfos) {
	return new Promise(function (resolve, reject) {
		var params = {
		  Bucket: bucket,
		  Delete: {
		  	Objects: [
		  	]
		  },
		};
		params.Delete.Objects = fileinfos;
		s3.deleteObjects(params, function(err, data) {
			if (err) reject(err);
    	resolve(data);
		});
  });
}

module.exports = StorageAWS;