/**
 * https://js.checkio.org/mission/median/
 */

function median(data) {
	var data = data.sort((a,b) => a-b);
	if (data.length % 2 == 1) {
		console.log(data[parseInt(data.length/2)]);
		return (data[parseInt(data.length/2)]);
	}
	var firstMidElement = data[data.length/2 - 1];
	var secondMidElement = data[data.length/2];
	return (firstMidElement + secondMidElement) / 2;
}

median([1, 2, 3, 4, 5])
median([3, 1, 2, 5, 3])
median([1, 300, 2, 200, 1])
median([3, 6, 20, 99, 10, 15])