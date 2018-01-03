/**
 * https://js.checkio.org/mission/good-radix/
 */

const DIGIT = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function goodRadix(number) {
	var n = number.split('').sort();
	for (var i=DIGIT.indexOf(n[n.length-1]); i<37; i++) {
		n = parseInt(number, i)
		if (n && (n % (i-1) == 0)) {
			console.log(i);
			return i;
		} 
	}
	return 0
}

goodRadix("18") == 10
goodRadix("1010101011") == 2
goodRadix("222") == 3
goodRadix("A23B") == 14
goodRadix("IDDQD") == 0 