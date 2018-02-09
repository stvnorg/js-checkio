/**
 * https://js.checkio.org/mission/bigger-together/
 */
function sortAsc(data) {
	var i = 0;
	while (i<data.length-1) {
		var a = parseInt(data[i]+data[i+1])
		var b = parseInt(data[i+1]+data[i])
		if (eval("a > b")) {
			var t = data[i]
			data[i] = data[i+1]
			data[i+1] = t
			if (i>0) i--;
		}
		i++;
	}
	return data
}

function sortAscDesc(data, stringOperator) {
	var i = 0;
	while (i<data.length-1) {
		var a = parseInt(data[i]+data[i+1])
		var b = parseInt(data[i+1]+data[i])
		if (eval(stringOperator)) {
			var t = data[i]
			data[i] = data[i+1]
			data[i+1] = t
			if (i>0) i--;
		}
		i++;
	}
	return data
}

function biggerTogether(data) {
	var asc = sortAscDesc(data.map(x=>x.toString()).sort(), "a > b")
	var desc = sortAscDesc(data.map(x=>x.toString()).sort().reverse(), "a < b")
	var desc = parseInt(desc.join("")) 
	var asc = parseInt(asc.join(""))
	console.log(desc, asc, desc-asc)
}

biggerTogether([1,2,3,4]) == 3087 // 4321 - 1234
biggerTogether([1,2,3,4, 11, 12]) == 32099877 // 43212111 - 11112234
biggerTogether([0, 1]) == 9 // 10 - 01
biggerTogether([100]) == 0 // 100 - 100
biggerTogether([3,12,22,32])
biggerTogether([420,42,423])