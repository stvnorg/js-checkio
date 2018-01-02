/**
 * https://js.checkio.org/mission/striped-words/
 */

const VOWELS = "aeiuoy";
const NUMBERS = "0123456789";

function stripedWords(text) {
	var count = 0;
	var text = text.match(/\w+/g);
	text.forEach(function(word) {
		var flag = true;
		word = word.toLowerCase();
		if (word.length==1) flag = false;
		for (var i=0; i<word.length-1; i++) {
			if (NUMBERS.includes(word[i])) flag = false;
			else if (VOWELS.includes(word[i]) && VOWELS.includes(word[i+1])) flag = false;
			else if (!VOWELS.includes(word[i]) && !VOWELS.includes(word[i+1])) flag = false;
			if (!flag) break;
		}
		if (flag) count++;
	})
	console.log(count);
}

stripedWords("My name is ...") == 3
stripedWords("Hello world") == 0
stripedWords("A quantity of striped words.") == 1, "Only of"
stripedWords("Dog,cat,mouse,bird.Human.") == 3