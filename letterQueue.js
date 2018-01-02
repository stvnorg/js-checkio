/**
 * https://js.checkio.org/mission/letter-queue/
 */

class Queue {
	
	constructor() {
		this.data = "";
	}
	
	PUSH(value) {
		this.data += value;
	}
	
	POP() {
		if (this.data.length) this.data = this.data.substring(1,this.data.length);
	}
	
	DATA() {
		return this.data;
	}
}

function letterQueue(commands) {
	var queue = new Queue();
	for (let command of commands) {
		if (command.includes('PUSH')) {
			queue.PUSH(command.substring(5,command.length));
		} else {
			queue.POP();
		}
	}
	console.log(queue.DATA());
}

letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]) == "DOT"
letterQueue(["POP", "POP"]) == ""
letterQueue(["PUSH H", "PUSH I"]) == "HI"
letterQueue([]) == ""