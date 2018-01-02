/**
 * https://js.checkio.org/mission/long-non-repeat/
 */

function checkRepeat(string) {
	var result = [string[0]];
	for (var i=1; i<string.length; i++) {
		if (result.includes(string[i])) return false;
		result.push(string[i]);
	}
	return true;
}

function nonRepeat(string) {
	var result = [""];
	for (var i=0; i<string.length; i++) {
		for (var j=string.length; j>0; j--) {
			var subs = string.substring(i,j);
			//console.log(subs, result, subs.localeCompare(result))
			if (checkRepeat(subs) && subs.length >= result[result.length-1].length) {
				 result.push(subs);
			}
		}
	}
	result.sort(function(a,b) { return (a.length < b.length || a.localeCompare(b)) });
	console.log(result);
}

nonRepeat('aaaaa') == 'a'
nonRepeat('abdjwawk') == 'abdjw'
nonRepeat('abcabcffab') == 'abcf'