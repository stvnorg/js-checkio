/**
 * https://js.checkio.org/mission/merge-intervals/
 */
function checkInterval(n, m, m_i) {
	if (n[1] >= m[0] && n[1] <= m[1]) return [[n[0],m[1]], m_i]
	if (n[1] >= m[0] && n[1] >= m[1]) return [n, m_i]
	if (n[1]+1 == m[0]) return [[n[0],m[1]], m_i]
	return [[],-1]
}

function mergeIntervals(arrays) {
	var result = []
	for (var i=0; i<arrays.length-1; i++) {
		for (var j=i+1; j<arrays.length; j++) {
			result = checkInterval(arrays[i], arrays[j], j)
			if (result[1]>=0) {
				arrays[i] = result[0]
				arrays[result[1]] = []
			}
		}
		result = []
	}
	arrays.forEach((x)=>{
		if (x.length>0) result.push(x)
	})
	console.log(result)
}

mergeIntervals([[1, 4], [2, 6], [8, 10], [12, 19]]) == [[1, 6], [8, 10], [12, 19]]
mergeIntervals([[1, 12], [2, 3], [4, 7]]) == [[1, 12]]
mergeIntervals([[1, 5], [6, 10], [10, 15], [17, 20]]) == [[1, 15], [17, 20]]