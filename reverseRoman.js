/**
 * https://js.checkio.org/mission/reverse-roman-numerals/
 */

var data = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

function reverseRoman(roman) {
	var result = 0;
	var i = 0;
	while (i < roman.length-1) {
		var a = roman[i];
		var b = roman[i+1];
		if (data[a] >= data[b]) {
			result += data[a];
			i++;
		} else {
			result += (data[b] - data[a]);
			i += 2;
		}
		//console.log(result)
	}
	if (i==roman.length-1) result += data[roman[roman.length-1]];
	console.log(result);
}

reverseRoman('VI') == 6
reverseRoman('LXXVI') == 76
reverseRoman('CDXCIX') == 499
reverseRoman('MMMDCCCLXXXVIII') == 3888