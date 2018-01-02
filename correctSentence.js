/**
 * https://js.checkio.org/mission/correct-sentence/ 
 */

function correctSentence(sentence) {
	var endChar = '';
	var n = sentence.length;
	if (sentence[n-1] != '.') {
		endChar = '.';
	}
	var result = sentence[0].toUpperCase() + sentence.substring(1,n) + endChar;
	console.log(result)
}

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."