/**
 * https://js.checkio.org/mission/brackets/
 */

const BRACKET = { '{':'}', '(':')', '[':']' }

function brackets(expr) {
	var re = /[\{\}\(\)\[\]]+/g
	var bracket = expr.match(re);
	if (bracket) bracket = bracket.join('').split('');
	else return true;
	var stack = [];
	for (var i=0; i<bracket.length; i++) {
		if (!stack.length && "])}".includes(bracket[i])) return false;
		else if (!stack.length || "{([".includes(bracket[i])) stack.push(bracket[i])
		else if ("])}".includes(bracket[i])) {
			var n = bracket[i];
			var m = stack[stack.length-1];
			if (BRACKET[m]==n) stack.pop();
			else return false;
		}
	}
	return (!stack.length);
}

console.log(brackets("((5+3)*2+1)")) == true
console.log(brackets("{[(3+1)+2]+}")) == true
console.log(brackets("(3+{1-1)}")) == false
console.log(brackets("[1+1]+(2*2)-{3/3}")) == true
console.log(brackets("(({[(((1)-2)+3)-3]/3}-3)")) == false
console.log(brackets("2+3")) == true