
class HttpHelperBase {
	constructor() {
		if(new.target === HttpHelperBase) {
			throw new Error('HttpHelperBase is an abstract class');
		}
	}
}

export { HttpHelperBase }
