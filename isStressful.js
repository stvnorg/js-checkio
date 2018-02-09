/**
 * https://js.checkio.org/mission/stressful-subject/
 */

function checkWord(array) {
	var word = [array[0]]
	var i = 1
	while (i < array.length) {
		if (array[i] != array[i-1]) word.push(array[i])
		i++
	}
	return word.join("")
}

function isStressful(line) {
	if (line.toUpperCase() == line) return true
	if (line.substring(line.length-3,line.length) == "!!!") return true
	var words = line.split(" ")
	for (var w=0; w<words.length; w++) {
		var word = words[w].match(/\w+/g).join("").toLowerCase().split("")
		var string = checkWord(word)
		if (["help","asap","urgent"].indexOf(string) >= 0) return true
	}
	return false
}

console.log(isStressful("Hi")) == false
console.log(isStressful("help I neeed HELP")) == true
console.log(isStressful("Hi!!!")) == true
console.log(isStressful("HI")) == true
console.log(isStressful("I neeed HEE-L-L-P"))
console.log(isStressful("We need you A.S.A.P.!!"))