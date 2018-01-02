/**
 * https://js.checkio.org/mission/word-pattern/
 */

function checkCommand(pattern, command) {
	var number = "0123456789";
	var binary = pattern.toString(2);
	//if (binary.length > pattern.length) return false;
	try {
		binary = "0".repeat(command.length - binary.length) + binary;
		for (var i=0; i<binary.length; i++) {
			if (binary[i]=="1" && number.includes(command[i])) return false;
			if (binary[i]=="0" && !number.includes(command[i])) return false;
		}
	} catch(err) { 
		console.log(binary)
		return false;
	}
	console.log(true);
}

checkCommand(42, "12a0b3e4") == true
checkCommand(101, "ab23b4zz") == false