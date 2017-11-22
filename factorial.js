/**
 * 
 */

function factorial(n) {
	if (n==1) return n;
	var result = n * (factorial(n-1))
	return result
}

console.log(factorial(4));