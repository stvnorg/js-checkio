/**
 * https://js.checkio.org/mission/hamming-distance/
 */

function hammingDistance(n1,n2) {
	var n1 = n1.toString(2)
	var n2 = n2.toString(2)
	if (n1.length > n2.length) n2 = "0".repeat(n1.length - n2.length) + n2
	if (n2.length > n1.length) n1 = "0".repeat(n2.length - n1.length) + n1
	var count = 0;
	for (var i=0; i<n1.length; i++) {
		if (n1[i] !== n2[i]) count++;
	}
	console.log(count);
}

hammingDistance(117, 17) == 3
hammingDistance(1, 2) == 2
hammingDistance(16, 15) == 5