/**
 * https://js.checkio.org/mission/count-neighbours/
 */

function countNeighbours(data, row, col) {
	var count = 0;
	var map = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
	map.forEach(function(m) {
		try {
			if (data[row+m[0]][col+m[1]] == 1) count++;
		} catch(err) {}
	});
	
	console.log(count);
} 

countNeighbours([[1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]], 1, 2)
    
countNeighbours([[1, 0, 0, 1, 0],
                 [0, 1, 0, 0, 0],
                 [0, 0, 1, 0, 1],
                 [1, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0]], 0, 0)