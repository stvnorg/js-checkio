/**
 * https://js.checkio.org/mission/broken-clock/
 */

const TIME_UNIT = { 'second': 1, 'minute': 60, 'hour': 3600,
					'seconds': 1, 'minutes': 60, 'hours': 3600 }

function toSeconds(clock) {
	var clock = clock.split(':');
	return (parseInt(clock[0])*3600) + (parseInt(clock[1])*60) + parseInt(clock[2])
}

function toTimeFormat(seconds) {
	var result = [];
	var remainder = 0;
	const unit = [3600, 60, 1]
	for (var i=0; i<3; i++) {
		remainder = seconds % unit[i]
		seconds = Math.floor(seconds/unit[i]).toString();
		result.push("0".repeat(2-seconds.length) + seconds)
		seconds = remainder;
	}
	return result.join(":");
}

function brokenClock(startingTime, wrongTime, errorDescription) {
	var broken = errorDescription.split(" ");
	var coeff = broken[0].substring(1,broken[0].length) * TIME_UNIT[broken[1]] / (broken[3] * TIME_UNIT[broken[4]])
	
	startingTime = toSeconds(startingTime);
	wrongTime = toSeconds(wrongTime);
	
	if (broken[0][0] == '+') coeff++;
	else coeff = 1 - coeff;
	
	var _time = toTimeFormat((wrongTime - startingTime) / coeff + startingTime);
	
	console.log(_time)
}

brokenClock('00:00:00', '00:00:15', '+5 seconds at 10 seconds') ==  '00:00:10'
brokenClock('06:10:00', '06:10:15', '-5 seconds at 10 seconds') ==  '06:10:30'
brokenClock('13:00:00', '14:01:00', '+1 second at 1 minute') ==  '14:00:00'
brokenClock('01:05:05', '04:05:05', '-1 hour at 2 hours') ==  '07:05:05'
brokenClock('00:00:00', '00:00:30', '+2 seconds at 6 seconds') ==  '00:00:22'
brokenClock("03:48:20","08:54:30","-2 hours at 3 hours")