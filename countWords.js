/**
 * https://js.checkio.org/mission/monkey-typing/
 */

function countWords(text, words) {
	var text = text.toLowerCase();
	var count = 0;
	for (let word of words) {
		if (text.includes(word)) count++;
	}
	console.log(count)
}

countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]) == 3
countWords("Bananas, give me bananas!!!", ["banana", "bananas"]) == 2
countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            ["sum", "hamlet", "infinity", "anything"]) == 1