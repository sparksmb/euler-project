
/********** Conventional Apporach ***********/
function prob1Conventional1(max) {
	var i,
		sum = 0;
	for (i = 1; i <= max; i += 1) {
		sum += (i % 3 === 0 || i % 5 === 0) ? i : 0;
	}
	return sum;
}

////////////////////////////////////////////////////////

function prob1Conventional2(max) {
	var i = 1,
		sum = 0;
	while (i <= max) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
		i += 1;
	}
	return sum;
}

/********** Functional Apporach ***********/
function sumMultiplesof3or5(previousValue, currentValue) {
	var multipleOf3 = makeMultipleOf(3),
	    multipleOf5 = makeMultipleOf(5);
		
	if (multipleOf3(currentValue) || multipleOf5(currentValue)) {
		return previousValue + currentValue;
	}
	return previousValue;
}
