let instance = null;
const enforcer_valid = new Object();

class Sleep {
	constructor(enforcer) {
		if(enforcer != enforcer_valid) {
			throw new Error('Cannot constructor singleton');
		}
	}

	static getInstance() {
		if(instance == null) {
			instance = new Sleep(enforcer_valid);
		}
		return instance;
	}

	sleep(ms) {
		var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
	}
}

export { Sleep }

