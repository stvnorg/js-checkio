/**
 * https://js.checkio.org/mission/clock-angle/
 */

function clockAngle(time) {
	var degree = 0;
	time = time.split(":")
	var hour = parseInt(time[0])
	if (hour >= 12) hour -= 12;
	var minute = parseInt(time[1])
	var hourDegree = (hour * 30) + (minute * 0.5)
	if (minute <= 30) minuteDegree = minute * 6
	else minuteDegree = 360 - (minute * 6)
	if (minute > 30) degree = minuteDegree + hourDegree
	else degree = Math.abs(minuteDegree - hourDegree) 
	if (degree > 180) degree = Math.abs(360 - degree)
	console.log(minuteDegree, hourDegree, degree)
}

clockAngle("02:30") == 105
clockAngle("13:42") == 159
clockAngle("01:43") == 153.5
clockAngle("12:01")
clockAngle("23:59")