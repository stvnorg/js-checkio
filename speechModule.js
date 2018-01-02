/**
 * https://js.checkio.org/mission/speechmodule/
 */

const SPEECH = {
		0:'', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
		10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty',
		30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety', 100:'hundred',
}

function speechModule(number) {
	var result = SPEECH[number];
	if (result) {
		return result;
	} else {
		result = "";
		var nStr = number.toString();
		var n = "";
		for (var i=0; i<nStr.length; i++) {
				n = nStr[i] + '0'.repeat(nStr.length-1-i);
				//console.log(n);
			if (n.length==3) {
				result += SPEECH[parseInt(nStr[i])] + ' ' + SPEECH[100];
			} else {
				var m = SPEECH[parseInt(nStr.substring(i,nStr.length))];
				if (m) {
					result += ' ' + m;
					i++;
				} else {
					result += " " + SPEECH[parseInt(n)];
				}
			}
		}
	}
	return result
}

console.log(speechModule(4));
console.log(speechModule(143))=='one hundred forty three'
console.log(speechModule(12))=='twelve'
console.log(speechModule(101))=='one hundred one'
console.log(speechModule(212))=='two hundred twelve'
console.log(speechModule(40))=='forty'
console.log(speechModule(156))

function sm(n) {
	if (n<=20) return SPEECH[n];
	var nStr = SPEECH[n];
	var x = 0;
	if (!nStr || n==100) { 
		var str = n.toString();
		if (str.length==3) {
			nStr = SPEECH[parseInt(str[0])] + " " + SPEECH[100];
			x = parseInt(str[0]) * 100;
		} else {
			x = parseInt(str[0]) * 10;
			nStr = SPEECH[x];
		}
	} else { return nStr; }
	var result = nStr + " " + (sm(n-x));
	return result.trim(' ');
}

console.log(sm(100))
console.log(sm(999))