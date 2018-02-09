/**
 * https://js.checkio.org/mission/binary-count/
 */

function binaryCount(number) {
	console.log(number.toString(2).match(/1/g).length);
}

binaryCount(4) == 1
binaryCount(15) == 4
binaryCount(1) == 1
binaryCount(1022) == 9