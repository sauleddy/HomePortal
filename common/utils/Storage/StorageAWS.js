
import { StorageBase } from './StorageBase';
import AWS from 'aws-sdk';
import { Sleep } from '../Sleep';

class StorageAWS extends StorageBase {
	
	constructor(authInfo) {
		super(authInfo);
		// console.log(authInfo);
		AWS.config.update({
      accessKeyId: authInfo.accessKeyId,
      secretAccessKey: authInfo.secretAccessKey
    });
	}

	async getFile(bucket, fileinfos) {
		let s3 = createS3(bucket);
		let res = await getFileInner(s3, bucket, fileinfos);
		return res;
	}

	async listFiles(bucket, fileinfos) {
		let s3 = createS3(bucket);
		let res = await listFilesInner(s3, fileinfos);
		return res;
	}

	async uploadFiles(bucket, fileinfos) {
		let res = [];
		let s3 = createS3(bucket);
		for(let i=0; i<fileinfos.length; ++i) {
			let resThis = await uploadFile(s3, fileinfos[i]);
			// console.log(resThis);
			res.push({Key:fileinfos[i].Key, Res:resThis});
		}
		return res;
	}

	async deleteFiles(bucket, fileinfos) {
		let s3 = createS3(bucket);
		let resThis = await deleteFilesInner(s3, bucket, fileinfos);
		return resThis;	
	}
}

function createS3(bucket) {
	let s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: bucket}
  });
  return s3;
}

function getFileInner(s3, bucket, fileinfos) {
	return new Promise(function (resolve, reject) {
		var params = {
		  Bucket: bucket,
		  Key: fileinfos.Key
		};
		s3.getObject(params, function(err, data) {
			if (err) reject(err);
    	resolve(data);
		});
  });
}

function listFilesInner(s3, fileinfos) {
	return new Promise(function (resolve, reject) {
		s3.listObjects({Prefix: fileinfos.Key}, function(err, data) {
			if (err) reject(err);
    	resolve(data);
		});
  });
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

export { StorageAWS }