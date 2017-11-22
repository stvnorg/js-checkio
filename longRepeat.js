/**
 * https://js.checkio.org/mission/long-repeat/
 */

function checkRepeat(subs, n) {
	for (var i=0; i<subs.length-1; i++) {
		if (subs[i]!=subs[i+1]) return false;
	}
	return true;
}

function longRepeat(data) {
	var result = 0;
	for (var i=data.length; i>0; i--) {
		for (var j=0; j<i; j++) {
			var subs = data.substring(j,i);
			if (checkRepeat(subs) && subs.length > result) result = subs.length ;
		}
	}
	return result;
}

console.log(longRepeat('sdsffffse'))
console.log(longRepeat('ddvvrwwwrggg'))