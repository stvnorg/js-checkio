/**
 * https://js.checkio.org/mission/roman-numerals/
 */

"use strict";

/*
function getNumerals(number) {
	if (number>=1 && number<4) return ["I", number - 1];
	else if (number==4) return ["IV", number - 4];
	else if (number>=5 && number<9) return ["V", number - 5];
	else if (number==9) return ["IX", number - 9];
	else if (number>=10 && number<40) return ["X", number - 10];
	else if (number>=40 && number<50) return ["XL", number - 40];
	else if (number>=50 && number<90) return ["L", number - 50];
	else if (number>=90 && number<100) return ["XC", number - 90];
	else if (number>=100 && number<400) return ["C", number - 100];
	else if (number>=400 && number<500) return ["CD", number - 400];
	else if (number>=500 && number<900) return ["D", number - 500];
	else if (number>=900 && number<1000) return ["CM", number - 900];
	else if (number>=1000) return ["M", number - 1000];
}

function romanNumerals(number) {
	var values = ["",number]
	var result = "";
	while (values[1]>0) {
		values = getNumerals(values[1]);
		result += values[0];
	}
	return result;
}

*/

function romanNumerals(number) {
	if (number>=1 && number<4) {
		var result = "I" + (romanNumerals(number - 1));
		return result
	} else if (number==4) {
		var result = "IV" + (romanNumerals(number - 4));
		return result;
	} else if (number>=5 && number<9) {
		var result = "V" + (romanNumerals(number - 5));
		return result;
	} else if (number==9) {
		var result = "IX" + (romanNumerals(number - 9));
		return result;
	} else if (number>=10 && number<40) {
		var result = "X" + (romanNumerals(number - 10));
		return result;
	} else if (number>=40 && number<50) {
		var result = "XL" + (romanNumerals(number - 40));
		return result;
	} else if (number>=50 && number<90) {
		var result = "X" + (romanNumerals(number - 50));
		return result;
	} else if (number>=90 && number<100) {
		var result = "XC" + (romanNumerals(number - 90));
		return result;
	} else if (number>=100 && number<400) {
		var result = "C" + (romanNumerals(number - 100));
		return result;
	} else if (number>=400 && number<500) {
		var result = "CD" + (romanNumerals(number - 400));
		return result;
	} else if (number>=500 && number<900) {
		var result = "D" + (romanNumerals(number - 500));
		return result;
	} else if (number>=900 && number<1000) {
		var result = "CM" + (romanNumerals(number - 900));
		return result;
	} else if (number>=1000) {
		var result = "M" + (romanNumerals(number - 1000));
		return result;
	} else return "";
}

console.log(romanNumerals(3));
console.log(romanNumerals(6));
console.log(romanNumerals(8));
console.log(romanNumerals(27));
console.log(romanNumerals(29));
console.log(romanNumerals(39));
console.log(romanNumerals(44));
console.log(romanNumerals(49));
console.log(romanNumerals(90));
console.log(romanNumerals(99));
console.log(romanNumerals(123));
console.log(romanNumerals(356));
console.log(romanNumerals(2075));
console.log(romanNumerals(3999)); 