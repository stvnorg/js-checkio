/**
 * https://js.checkio.org/mission/weak-point/
 */

function weakPoint(matrix) {
	
	var row = 0, rowIndex = 0;
	var col = 0, colIndex = 0;
	
	for (var i=0; i<matrix.length; i++) {
		var rowSum = 0;
		var colSum = 0;
		for (var j=0; j<matrix.length; j++) {
			rowSum += data[i][j];
			colSum += data[j][i];
		}
		if (row == 0 || rowSum < row) {
			row = rowSum;
			rowIndex = i;
		}
		if (col == 0 || colSum < col)  {
			col = colSum;
			colIndex = i;
		}
	}
	
	return [rowIndex, colIndex];
}

weakPoint([[7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]])
    
weakPoint([[7, 2, 4, 2, 8],
           [2, 8, 1, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]])