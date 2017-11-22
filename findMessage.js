/**
 * https://js.checkio.org/mission/secret-message/
 */

function findMessage(data) {
	var result = "";
	var reg = /[A-Z]/g;
	do {
		var found = reg.exec(data);
		if (found) result += found[0];
	} while (found);
	return result;
}

console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."))
console.log(findMessage("hello world!"))