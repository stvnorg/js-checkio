/**
 * https://js.checkio.org/mission/even-last/
 */

function evenLast(data) {
	if (!data.length) return 0;
	var totalSum = 0;
	for (var i=0; i<data.length; i+=2) {
		totalSum += data[i];
	}
	return totalSum * data[data.length-1];
}

console.log(evenLast([0, 1, 2, 3, 4, 5]))
console.log(evenLast([1, 3, 5]))
console.log(evenLast([6]));
console.log(evenLast([]));