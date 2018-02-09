/**
 * https://js.checkio.org/mission/flatten-list/
 */

var r=[]
var f=((n)=>{n.forEach((i)=>{if (typeof(i)=='object') f(i);else r.push(i)})})
var flatList=((n)=>{f(n);var t=r;r=[];console.log(t);return t})

flatList([1, 2, 3]) == [1, 2, 3]
flatList([1, [2, 2, 2], 4]) == [1, 2, 2, 2, 4]
flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]) == [2, 4, 5, 6, 6, 6, 6, 6, 7]
flatList([-1, [1, [-2], 1], -1]) == [-1, 1, -2, 1, -1]
flatList([[[[[[[[[]]]]]]]]])