/**
 * https://js.checkio.org/mission/friendly-number/
 */

powers = { 'k': 3, 'M': 6, 'G': 9, 'T': 12, 'P': 15, 'E': 18, 'Z': 21, 'Y': 24 }

function getBase(numLength) {
	if (numLength > 3 && numLength <= 6) return [Math.pow(10,3), 'k']
	if (numLength > 6 && numLength <= 9) return [Math.pow(10,6), 'M']
	if (numLength > 9 && numLength <= 12) return [Math.pow(10,9), 'G']
	if (numLength > 12 && numLength <= 15) return [Math.pow(10,12), 'T']
	if (numLength > 15 && numLength <= 18) return [Math.pow(10,15), 'P']
	if (numLength > 18 && numLength <= 21) return [Math.pow(10,18), 'E']
	if (numLength > 21 && numLength <= 24) return [Math.pow(10,21), 'Z']
	if (numLength > 24) return [Math.pow(10,24), 'Y']
}

function friendlyNumber(number, argument={}) {
	numLength = number.toString().length
	if (numLength < 4 && argument['base']==undefined) {
		console.log(number.toString())
		return number.toString()
	}
	if (argument['base'] == undefined) {
		var base_unit = getBase(numLength)
		argument['base'] = base_unit[0] 
		argument['unit'] = base_unit[1]
	}
	if (argument['decimals']) argument['decimals'] = argument['decimals']
	
	var result = number/argument['base']
	console.log(result, number, argument['base'])

}

friendlyNumber(102) == '102'
friendlyNumber(102, {base: 100}) == '102'
friendlyNumber(10240) == '10k'
friendlyNumber(12341234, {decimals: 1}) == '12.3M'
friendlyNumber(12000000, {decimals: 3}) == '12.000M'
friendlyNumber(12461, {decimals: 1}) == '12.5k'
friendlyNumber(1024000000, {base: 1024, suffix: 'iB'}) == '976MiB'