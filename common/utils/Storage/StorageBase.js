

class StorageBase {
	constructor(authInfo) {
		if(new.target === StorageBase) {
			throw new Error('StorageBase is an abstract class');
		}
		this.authInfo = authInfo;
	}

	async getFiles(bucket, fileinfos, fn) {
	}

	async uploadFiles(bucket, fileinfos, fn) {
	}

	async deleteFiles(bucket, fileinfos, fn) {
	}
}

export { StorageBase }