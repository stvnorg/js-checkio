/**
 * https://js.checkio.org/mission/cut-sentence/
 */

function cutSentence(sentence, length) {
	if (length >= sentence.length) return sentence;
	var words = sentence.split(" ");
	var result = words[0];
	if (length < result.length) return "...";
	for (var i=1; i<words.length; i++) {
		var tmp = result + " " + words[i];
		if (tmp.length <= length) result += " " + words[i];
		else { 
			console.log(result + "...");
			return result + "...";
		}
	}
	console.log(result + "...");
	return result + "...";
}

cutSentence("Hi my name is Alex", 8) == "Hi my..."
cutSentence("Hi my name is Alex", 4) == "Hi..."
cutSentence("Hi my name is Alex", 20) == "Hi my name is Alex"