/**
 * https://js.checkio.org/mission/create-intervals/
 */

function createIntervals(array) {
	if (!array.length) return [];
	array.sort((x,y) => x - y);
	console.log(array);
	var result = [];
	var tmp = [];
	for (var i=0; i<array.length; i++) {
		if (!tmp.length || tmp[tmp.length-1] + 1 == array[i]) tmp.push(array[i]);
		else {
			result.push([tmp[0],tmp[tmp.length-1]]);
			tmp = [array[i]];
		}
	}
	result.push([tmp[0],tmp[tmp.length-1]]);
	console.log(result);
}

createIntervals([1, 2, 3, 4, 5, 7, 8, 12]) == [[1, 5], [7, 8], [12, 12]]
createIntervals([1, 2, 3, 6, 7, 8, 4, 5]) == [[1, 8]]