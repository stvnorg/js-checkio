/**
 * https://js.checkio.org/mission/matrix-transpose/
 */

function transposeMatrix(matrix) {
	var transpose = [];
	for (var i=0; i<matrix[0].length; i++) {
		var m = [];
		for (var j=0; j<matrix.length; j++) {
			m.push(matrix[j][i]);
		}
		transpose.push(m);
	}
	console.log(transpose);
}

transposeMatrix([[1, 2, 3],[4, 5, 6],[7, 8, 9]]) == [[1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9]]
                    
transposeMatrix([[1, 4, 3],
    [8, 2, 6],
    [7, 8, 3],
    [4, 9, 6],
    [7, 8, 1]]) == [[1, 8, 7, 4, 7],
                    [4, 2, 8, 9, 8],
                    [3, 6, 3, 6, 1]]