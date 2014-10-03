/*jslint sloppy: true */

/********** Conventional Apporach ***********/
function isPrime(number) { //naive approach
	var i,
		max = Math.ceil(Math.sqrt(number));
	
	if (number !== 2) {
		for (i = 2; i <= max; i += 1) {
			if (number % i === 0) {
				return false;
			}
		}
	}
	return true;
}

function prob3Conventional(number) {
	var dividend = number,
		divisor = 1,
		otherFactor = number,
		maxPrime = 2;
	
	while (divisor < otherFactor) {
		if (dividend % divisor === 0) {
			otherFactor = dividend / divisor;
			if (isPrime(divisor)) {
				maxPrime = divisor;
			}
			if (isPrime(otherFactor)) {
				maxPrime = otherFactor;
			}
		}
		divisor += 1;
	}
	return maxPrime;
}

