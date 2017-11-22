/**
 * https://js.checkio.org/mission/digits-multiplication/
 */

function digitsMultip(number) {
	var numbers = number.toString();
	var total = 1;
	for (var i=0; i<numbers.length; i++) {
		if (numbers[i]!="0") total *= numbers[i];
	}
	//console.log(total);
	return total;
}

digitsMultip(123405) == 120
digitsMultip(999) == 729
digitsMultip(1000) == 1
digitsMultip(1111) == 1