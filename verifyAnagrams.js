/**
 * https://js.checkio.org/mission/verify-anagrams/
 */

function verifyAnagrams(text1, text2) {
	text1 = text1.toLowerCase().replace(/ /g,'').split('').sort();
	text2 = text2.toLowerCase().replace(/ /g,'').split('').sort();
	console.log(text1.join('') == text2.join(''))
}

verifyAnagrams("Programming", "Gram Ring Mop") == true
verifyAnagrams("Hello", "Ole Oh") == false
verifyAnagrams("Kyoto", "Tokyo") == true