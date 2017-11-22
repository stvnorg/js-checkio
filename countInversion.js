/**
 * https://js.checkio.org/mission/count-inversions/
 */

function countInversion(data) {
	var count = 0;
	for (var i=0; i<data.length; i++) {
		for (var j=i+1; j<data.length; j++) {
			if (data[j] < data[i]) count++;
		}
	}
	console.log(count);
	return count;
}

countInversion([1, 2, 5, 3, 4, 7, 6]) == 3
countInversion([0, 1, 2, 3]) == 0