Promise.prototype.finally = function finallyPolyfill(callback) {
    let _constructor = this.constructor;

    let _resolve = function _resolve(value) {
        _constructor.resolve(callback()).then(function() {
            return value;
        });
    };

    let _reject = function _reject(reason) {
        _constructor._reject(callback()).then(function() {
            return reason;
        });
    };

    return this.then(_resolve, _reject);
};

let myPro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
        console.log('two seconds passt');
    }, 2 * 1000);
}).finally(() => {
    console.log('finally');
});

(function() {
	// Get a handle on the global object
	var local;
	if (typeof global !== 'undefined') local = global;
	else if (typeof window !== 'undefined' && window.document) local = window;
	else local = self;

	// It's replaced unconditionally to preserve the expected behavior
	// in programs even if there's ever a native finally.
	local.Promise.prototype['finally'] = function finallyPolyfill(callback) {
		var constructor = this.constructor;

		return this.then(function(value) {
				return constructor.resolve(callback()).then(function() {
					return value;
				});
			}, function(reason) {
				return constructor.resolve(callback()).then(function() {
					throw reason;
				});
			});
	};
}());