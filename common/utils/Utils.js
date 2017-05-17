let instance = null;
const enforcer_valid = new Object();

class Utils {
	constructor(enforcer) {
		if(enforcer != enforcer_valid) {
			throw new Error('Cannot constructor singleton');
		}
	}

	static getInstance() {
		if(instance == null) {
			instance = new Utils(enforcer_valid);
		}
		return instance;
	}

	toJSON(proto) {
		let jsoned = {};
		let toConvert = proto;
		Object.getOwnPropertyNames(toConvert).forEach((prop) => {
	    const val = toConvert[prop];
	    // don't include those
	    if (prop === 'toJSON' || prop === 'constructor') {
        return;
	    }
	    if (typeof val === 'function') {
        jsoned[prop] = val.bind(jsoned);
        return;
	    }
	    if (val === undefined) {
	    	return;
	    }
	    jsoned[prop] = val;
		});

		const inherited = Object.getPrototypeOf(toConvert);
		if (inherited !== null) {
	    Object.keys(this.toJSON(inherited)).forEach(key => {
        if (!!jsoned[key] || key === 'constructor' || key === 'toJSON')
          return;
        if (typeof inherited[key] === 'function') {
          jsoned[key] = inherited[key].bind(jsoned);
          return;
        }
        if (val === undefined) {
		    	return;
		    }
        jsoned[key] = inherited[key];
	    });
		}
		return jsoned;
	}
}

export { Utils }

