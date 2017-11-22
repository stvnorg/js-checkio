/**
 * 
 */

function checkNonUnique(array, element) {
	var count = 0;
	for (var i=0; i<array.length; i++) {
		if (array[i] == element) count++;
		if (count>1) return true;
	}
	return false;
}

function nonUniqueElements(array) {
	var result = [];
	for (var i=0; i<array.length; i++) {
		if (checkNonUnique(array, array[i])) result.push(array[i]);
	}
	return result;
}

nonUniqueElements([1,2,3,3])
nonUniqueElements([1, 2, 3, 1, 3])
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]