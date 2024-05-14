export class Emitter {
	store;

	constructor() {
		this.store = {};
	}

	on(hooks, handler) {
		hooks.split(' ').forEach((k) => {
			if (!this.store[k]) this.store[k] = [];
			this.store[k].push(handler);
		});
	}

	emit(hook, payload) {
		if (this.store[hook]) {
			this.store[hook].forEach((handler) => {
				handler.apply(this, [{...payload}]);
			});
		}
	}
}
