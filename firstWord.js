/**
 * https://js.checkio.org/mission/first-word/
 */

function firstWord(strings) {
	var re = /\w+\'*\w*\s*/g;
	var result = strings.match(re);
	console.log(result[0].trim())
}

firstWord("Hello world") == "Hello"
firstWord("greetings, friends") == "greetings"
firstWord("it's, friends") == "greetings"
firstWord("'it's, friends") == "greetings"
firstWord("' it's, friends") == "greetings"
firstWord("''  it's, friends") == "greetings"
firstWord(" a word ")