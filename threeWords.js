/**
 * https://js.checkio.org/mission/three-words/
 */

function threeWords(data) {
	var words = data.split(" ");
	if (words.length<3) return false;
	var index = []; console.log(words);
	for (var i=0; i<words.length-2; i++) {
		var word1 = words[i].match(/[a-zA-Z]+/g);
		var word2 = words[i+1].match(/[a-zA-Z]+/g);
		var word3 = words[i+2].match(/[a-zA-Z]+/g);
		if (word1 && word2 && word3) return true;
	}
	return false;
}

console.log(threeWords("Hello World hello"))
console.log(threeWords("He is 123 man"))
console.log(threeWords("1 2 3 4"))
console.log(threeWords("bla bla bla bla"))
console.log(threeWords("Hi"))
console.log(threeWords("Hi5 5hi hii"))