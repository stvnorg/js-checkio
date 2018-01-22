/**
 * https://js.checkio.org/mission/x-o-referee/
 */

function checkResult(chr, data) {
	for (var i=0; i<3; i++) {
		if (data[i][0] + data[i][1] + data[i][2] == chr.repeat(3)) return chr
		if (data[0][i] + data[1][i] + data[2][i] == chr.repeat(3)) return chr
	}
	if (data[0][0] + data[1][1] + data[2][2] == chr.repeat(3)) return chr
	if (data[2][0] + data[1][1] + data[0][2] == chr.repeat(3)) return chr
	return null
}

function xoReferee(data) {
	if (checkResult('X', data)) return 'X'
	if (checkResult('O', data)) return 'O'
	return 'D'
}

console.log(xoReferee([
    "X.O",
    "XX.",
    "XOO"])) == "X"
console.log(xoReferee([
    "OO.",
    "XOX",
    "XOX"])) == "O"
console.log(xoReferee([
    "OOX",
    "XXO",
    "OXX"])) == "D"