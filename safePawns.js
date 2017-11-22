/**
 * https://js.checkio.org/mission/pawn-brotherhood/
 */

function safePawns(data) {
	var safe = 0;
	data.forEach(function(d) {
		col = d[0].charCodeAt(0);
		char1 = String.fromCharCode(col-1);
		char2 = String.fromCharCode(col+1);
		char3 = parseInt(d[1]-1).toString();
		test1 = char1 + char3;
		test2 = char2 + char3;
		if (data.includes(test1) || data.includes(test2)) safe++;
	})
	return safe;
}

console.log(safePawns(["b4"]));
console.log(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"])) == 6
console.log(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"])) == 1