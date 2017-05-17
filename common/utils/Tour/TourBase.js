
class TourBase {
	constructor(storage) {
		if(new.target === TourBase) {
			throw new Error('TourBase is an abstract class');
		}
		this.storage = storage;
	}
}

module.exports = TourBase;

