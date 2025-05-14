// This function determines if a number is prime. 
// See first if statement of HavokN. 
const isPrime = num => {
	for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if(num % i === 0) return false;
	}
	return num > 1;
}

function HavokN( data, size, iterations = 0 ) {
	// Calculate the size once and re-use it instead of recalculating it every 
	// time we need it. This should greatly improve the performance of the 
	// following if statement.
	var exponatedSize = ((2 ** size)-1);
	
	// Don't bother if the requested hash size is already a prime number, but
	// if it isn't, keep subtracting 1 from the size until we find one that is 
	// prime. This is probably terribly inefficient, but it gets the job done.
	if( isPrime(exponatedSize) || size == 1 ) {
		prime = exponatedSize;
	} else {
		for ( i = exponatedSize; !isPrime(i); i-- ) {
			prime = i-1;
		}
	}
	
	count = data.length;
	
	var sum1 = 0;
	var sum2 = 0;
	// This is where the algorithm actually starts
	for ( index = 0; index < count; index++ ) {
		sum1 = (sum1 + data.codePointAt(index)) % prime;
		sum2 = (sum2 + sum1) % prime;
	}
	// '<<' is an operator that bitshifts the number on the left by the number 
	// on the right. It needs to be half of the length because sum1 is 
	// (theoretically) half the length of sum2, and we're basically just 
	// appending sum1 to sum2.
	// Then it takes that and bitwise-or it against sum1.
	combinedsum = ( sum2 << Math.floor(size/2) ) | sum1;
	// This impliments a very basic iterative function TO THE FINAL CALCULATED 
	// CHECKSUM. This is helpful for if you want similar inputs' checksums to 
	// look more different from eachother.
	while(iterations > 0) {
		combinedsum = (combinedsum * size) % prime;
		iterations--;
	}
	return combinedsum;
}

module.exports = HavokN
