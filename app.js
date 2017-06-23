var obj = {
	test1: 1,
	test2: 2,
	test3: 3,
	test4: 4
};

var logProperty = function (prop) {
	console.log(get(prop));
};

var get = function (prop) {
	return obj[prop];
};

var logAllProps = function () {
	var allProps = [];
	Object.keys(obj).forEach(function (key) {
		allProps.push(obj[key]);
	});
	console.log(allProps.join(', '));
}

logAllProps();
