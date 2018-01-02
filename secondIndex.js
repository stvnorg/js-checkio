/**
 * https://js.checkio.org/mission/second-index/
 */

function secondIndex(text, symbol) {
	var first = text.indexOf(symbol);
	if (first<0) return undefined;
	for (var i=first+1; i<text.length; i++) {
		if (text[i]==symbol) return i;
	}
}

secondIndex("sims", "s") == 3
secondIndex("find the river", "e") == 12
secondIndex("hi", " ")  == undefined