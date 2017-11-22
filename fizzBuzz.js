/**
 * https://js.checkio.org/mission/fizz-buzz/
 */

function fizzBuzz(number) {
	if (number%3==0 && number%5==0) return "Fizz Buzz";
	if (number%3==0) return "Fizz";
	if (number%5==0) return "Buzz";
	return number.toString();
}

console.log(fizzBuzz(15)) == "Fizz Buzz"
console.log(fizzBuzz(6)) == "Fizz"
console.log(fizzBuzz(5)) == "Buzz"
console.log(fizzBuzz(7)) == "7"