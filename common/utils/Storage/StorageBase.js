

class StorageBase {
	constructor(authInfo) {
		if(new.target === StorageBase) {
			throw new Error('StorageBase is an abstract class');
		}
		this.authInfo = authInfo;
	}

	upload(bucket, filepath, files) {
	}

	delete(bucket, filepath, files) {
	}
}

module.exports = StorageBase;

