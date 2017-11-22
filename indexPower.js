/**
 * https://js.checkio.org/mission/index-power/
 */

function indexPower(data, n) {
	if (data[n]>=0) return Math.pow(data[n], n);
	return -1;
}

console.log(indexPower([1, 2, 3, 4], 2));
console.log(indexPower([1, 3, 10, 100], 3));
console.log(indexPower([0, 1], 0));
console.log(indexPower([1, 2], 3));
