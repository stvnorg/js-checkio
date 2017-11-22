/**
 * https://js.checkio.org/mission/most-wanted-letter/
 */

function mostWanted(data) {
	var result = [0,'{'];
	var data = Array.from(data.toLowerCase()).sort();
	data.forEach(function(letter) {
		if (letter.match(/^[a-zA-Z]+$/)) {
			var count = 0;
			for (var i=0; i<data.length; i++) {
				if (data[i] == letter) count++;
			}
			if (count > result[0]) {
				result[0] = count;
				result[1] = letter;
			}
		}
	});
	return result[1];
}

mostWanted("Hello World!") == "l"
mostWanted("How do you do?") == "o"
mostWanted("One") == "e"
mostWanted("Oops!") == "o"
mostWanted("AAaooo!!!!") == "a"
mostWanted("abe") == "a"