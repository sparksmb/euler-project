/*jslint sloppy:true */
function isPalindrome(text) {
	return text === text.split('').reverse().join('');
}

function getHighestNumber(numberOfDigits) {
	var i, highestNumber = '1';
	for (i = 0; i < numberOfDigits; i += 1) {
		highestNumber += '0';
	}
	return highestNumber - 1;
}

function prob4Conventional(numberOfDigits) {
	var product,
		highestProduct = 0,
		highestNum = getHighestNumber(numberOfDigits),
		multiplicand = highestNum,
		multiplier = multiplicand;
	
	function pickHigherProduct(product) {
		return highestProduct > product ? highestProduct : product;
	}
	
	while (multiplicand > 0) {
		do {
			product = multiplicand * multiplier;
			if (isPalindrome(product.toString())) {
				//console.log(multiplicand.toString() + ' x ' + multiplier.toString());
				highestProduct = pickHigherProduct(product);
			}
			multiplier -= 1;
		} while (multiplier > 0);
		multiplicand -= 1;
		multiplier = highestNum;
	}
	return highestProduct;
}