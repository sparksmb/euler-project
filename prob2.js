/*jslint sloppy: true */
/*global isEven */

/********** Conventional Apporach ***********/
function prob2Conventional(max) {
	var maxNum = max,
		prev1 = 1,
		prev2 = 2,
		sum,
		evenSum = 0;
	
	while (prev1 < maxNum && prev2 < maxNum) {
		sum = prev1 + prev2;
		evenSum += (prev2 % 2 === 0) ? prev2 : 0;
		prev1 = prev2;
		prev2 = sum;
	}
	
	return evenSum;
}

/********** Functional Apporach ***********/
function getFibList(max) {
	var maxNum = max,
		prev1 = 1,
		prev2 = 2,
		sum,
		array = [1, 2];
	
	do {
		sum = prev1 + prev2;
		if (sum < maxNum) {
			array.push(sum);
			prev1 = prev2;
			prev2 = sum;
		} else {
			break;
		}
	} while (true);
	return array;
}

function sumEvenValuedTerms(previousValue, currentValue) {
	if (isEven(currentValue)) {
		return previousValue + currentValue;
	}
	return previousValue;
}