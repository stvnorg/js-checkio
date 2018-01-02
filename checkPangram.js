/**
 * https://js.checkio.org/mission/pangram/
 */

function checkPangram(text) {
	text = text.toLowerCase();
	for (var i=97; i<123; i++) {
		if (!text.includes(String.fromCharCode(i))) return false;
	}
	console.log(true);
}

checkPangram("The quick brown fox jumps over the lazy dog.") == true
checkPangram("ABCDEF.") == false