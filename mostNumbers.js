/**
 * https://js.checkio.org/mission/most-numbers/
 */

function mostNumbers() {
	if (!arguments.length) return 0
	var array = [];
	for (var i=0; i<arguments.length; i++) array.push(arguments[i]);
	array.sort(function(a,b) { return a - b });
	return array[array.length-1] - array[0];
}

mostNumbers(1, 2, 3) == 2
mostNumbers(5, -5) == 10
mostNumbers(10.2, -2.2, 0, 1.1, 0.5) == 12.4
mostNumbers() == 0