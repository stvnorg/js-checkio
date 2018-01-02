/**
 * https://js.checkio.org/mission/bird-language/
 */

const CONSONANT = "bcdfghjklmnpqrstvwxz";

function translate(phrase) {
	var phrase = phrase.toLowerCase().split(' ');
	var translation = [];
	phrase.forEach(function(word) {
		var tmp = ""
		var i = 0;
		while (i<word.length) {
			tmp += word[i];
			if (CONSONANT.indexOf(word[i]) >= 0) i += 2; 
			else i += 3;
		}
		translation.push(tmp);
	})
	
	console.log(translation.join(" "));
	return translation.join(" ");
}

translate("hieeelalaooo") == "hello"
translate("hoooowe yyyooouuu duoooiiine") == "how you doin"
translate("aaa bo cy da eee fe") == "a b c d e f"
translate("sooooso aaaaaaaaa") == "sos aaa"