/**
 * https://js.checkio.org/mission/common-words/
 */

function commonWords(first, second) {
	var first = first.split(',');
	var second = second.split(',');
	var result = [];
	first.forEach(function(word) {
		if (second.includes(word)) result.push(word);
	})
	return result.sort().join(',');
}

commonWords("hello,world", "hello,earth") == "hello"
commonWords("one,two,three", "four,five,six") == ""
commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"