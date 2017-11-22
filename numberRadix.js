/**
 * https://js.checkio.org/mission/number-radix/
 */
function numberValidation(str_number, radix) {
	var letter = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i=0; i<str_number.length; i++) {
		if (letter.indexOf(str_number[i])+1 > radix) return false;
	}
	return true;
}

function numberRadix(str_number,radix) {
	if (!numberValidation(str_number, radix)) return -1;
	return parseInt(str_number, radix);
	//var result = parseInt(str_number, radix);
	//console.log("abc".indexOf('c'));
	//if (result) return result;
	//return -1;
}

console.log(numberRadix("AF", 16)) == 175
console.log(numberRadix("101", 2)) == 5
console.log(numberRadix("101", 5)) == 26
console.log(numberRadix("Z", 36)) == 35
console.log(numberRadix("AB", 10)) == -1
console.log(numberRadix("AB",10));
console.log(numberRadix("ASD",15))