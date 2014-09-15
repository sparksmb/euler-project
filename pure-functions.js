function numList(min, max) {
	var list = [];
	for (var i = min; i <= max; i += 1) {
		list.push(i);
	}
	return list;
}

function isEven(value) {
	return value % 2 === 0;
}

function makeMultipleOf(base) {
	return function (num) {
		return num != 0 ? num % base === 0 : false;
	}
}

function reduceListByAlgo(list, algo) {
	return list.reduce(function (previousValue, currentValue) { 
		return algo(previousValue, currentValue);
	}, 0);
}
