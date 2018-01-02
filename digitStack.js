/**
 * https://js.checkio.org/mission/digit-stack/
 */

function digitStack(commands) {
	var array = [];
	var sum = 0;
	commands.forEach(function(cmd) {
		var cmd = cmd.split(" ");
		if (cmd.includes("PUSH")) {
			var number = parseInt(cmd[1]);
			array.push(number);
		} else if (cmd.includes("PEEK") && array.length) {
			sum += array[array.length-1];
		} else if (array.length) {
			sum += array.pop();	
		}
	})
	console.log(sum);
	return sum;
}

digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]) == 8
digitStack(["POP", "POP"]) == 0
digitStack(["PUSH 9", "PUSH 9", "POP"]) == 9
digitStack([]) == 0