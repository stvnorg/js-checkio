/**
 * https://js.checkio.org/mission/morse-clock/
 */

function morseClock(time) {
	var morseCode = [];
	var time = time.split(':');
	
	var binToMorse = function(s) {
		var morse = "";
		for (var i=0; i<s.length; i++) {
			if (s[i]=='0') morse += '.';
			else morse += '-';
		}
		return morse;
	}
	
	for (var i=0; i<time.length; i++) {
		if (time[i].length<2) time[i] = "0" + time[i]
		var bin1 = parseInt(time[i][0], 10).toString(2);
		var bin2 = parseInt(time[i][1], 10).toString(2);
		if (i==0) { 
			bin1 = ("0"+bin1).slice(-2);
			bin2 = ("000"+bin2).slice(-4);
		}
		else {
			bin1 = ("00"+bin1).slice(-3);
			bin2 = ("000"+bin2).slice(-4);
		}
		morseCode.push(binToMorse(bin1) + " " + binToMorse(bin2));
	}
	console.log(morseCode.join(' : '));
	morseCode.join(' : ')
}

morseClock("10:37:49") == ".- .... : .-- .--- : -.. -..-"
morseClock("21:34:56") == "-. ...- : .-- .-.. : -.- .--."
morseClock("00:1:02") == ".. .... : ... ...- : ... ..-."
morseClock("23:59:59") == "-. ..-- : -.- -..- : -.- -..-"