/**
 * https://js.checkio.org/mission/triangle-angles/
 */

function triangleAngles(a,b,c) {
	var angleA = Math.round(Math.acos((Math.pow(b,2) + Math.pow(c,2) - Math.pow(a,2)) / (2 * b * c)) * (180/Math.PI));
	if (Number.isNaN(angleA) || angleA<=0) return [0,0,0];
	var angleB = Math.round(Math.acos((Math.pow(a,2) + Math.pow(c,2) - Math.pow(b,2)) / (2 * a * c)) * (180/Math.PI));
	var angleC = 180 - angleA - angleB;
	return [angleA, angleB, angleC].sort(function(a,b) { return a - b});
	//console.log(angleA, a, angleB, b, angleC, c);
}

console.log(triangleAngles(4, 4, 4)) == [60, 60, 60]
console.log(triangleAngles(3, 4, 5)) == [37, 53, 90]
console.log(triangleAngles(10,20,30))
console.log(triangleAngles(2, 2, 5)) == [0, 0, 0]