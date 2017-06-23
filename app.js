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

logProperty('test1');
