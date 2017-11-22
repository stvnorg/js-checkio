/**
 * https://js.checkio.org/mission/absolute-sorting/
 */

function absoluteSorting(array) {
	var result = [];
	for (var i=0; i<array.length; i++) {
		result.push(array[i]);
	}
	var i=0;
	while (i<array.length-1) {
		if (Math.abs(array[i]) > Math.abs(array[i+1])) {
			var tmp = array[i];
			array[i] = array[i+1];
			array[i+1] = tmp;
			if (i>0) i--;
		} else {
			i++;
		}
	}
	//result[0], result[1] = result[1], result[0];
	console.log(array);
}

absoluteSorting((-20, -5))
absoluteSorting([-20, -5, 10, 15]) == [-5, 10, 15, -20]
absoluteSorting([1, 2, 3, 0]) == [0, 1, 2, 3]
absoluteSorting([-1, -2, -3, 0]) == [0, -1, -2, -3]