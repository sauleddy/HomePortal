

class Storage {
	constructor(authInfo) {
		if(new.target === Storage) {
			throw new Error('Storage is an abstract class');
		}
		this.authInfo = authInfo;
	}

	upload(bucket, filepath, files) {
	}

	delete(bucket, filepath, files) {
	}
}

module.exports = Storage;

