/**
 * https://js.checkio.org/mission/double-substring/
 */

function doubleSubstring(string) {
	var longest = 0;
	var subs = "";
	for (var i=0; i<string.length; i++) {
		for (var j=string.length; j>i; j--) {
			subs = string.substr(i,j);
			found = string.match(new RegExp(subs, "g"));
			if (found.length >=2 && subs.length >= longest) {
				longest = subs.length
			}
		}
	}
	console.log(longest)
}

doubleSubstring('aaaa') == 2
doubleSubstring('abc') == 0
doubleSubstring('aghtfghkofgh') == 3 
doubleSubstring("abababaab")