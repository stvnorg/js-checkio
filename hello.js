/**
 * 
 */
"use strict"
var hello = "Hello World!";
function test() {
	let hello = "Hi ";
	console.log(hello + " Steven")
	for (var i=1; i<=10; i++) {
		if (i==5) break;
		console.log(-i*2);
	}
	let x = -1;
	var result = x > 0 ? "positive" : "negative";
	console.log(result);
	
	for (var i=0; i<=2; i++) {
		innerloop:
			for (var j=0; j<=10; j++) {
				if (j==5) break innerloop;
				console.log(j);
			}
	}
}

function parameter(...params) {
	for (var i=0; i<params.length; i++) {
		console.log(params[i]);
	}
	var func = function(a,b) { return a*b; }
	console.log(func(256,256));
	
	var foo = new Function("x","y","return Math.pow(x,y)");
	console.log(foo(2,4));
}

function factorial(n) {
	if (n>0) {
		return (n * factorial(n-1));
	}
	return 1;
}

test();
parameter(1,23,4,"a")
console.log(factorial(5));

(function() {
	var msg = "Hello World!";
	console.log(msg);
})();

var f = (x,y,z)=>x+y+z;
console.log(f(4,5,6));

var ff = ()=>{
	var msg = "lambda function";
	console.log(msg);
	for (var i=0;i<2;i++) {
		console.log(Math.pow(2,i),i);
	}
}
ff();

function full() {
	(function() {
		var msg = function() {
			console.log("Anonymous function inside anonymous recursive function");
		}
		msg();
	})();
	var msg = (x)=> { console.log(x + " (lambda function)"); }
	msg(1000);
}

full();

function* generator() {
	yield "hello";
	yield "world!";
} 
var g = generator();
console.log(g.next().value);
console.log(g.next().value);

for (let h of g) {
	console.log(h);
}

function* gen() {
	for (var i=0; i<10; i++) {
		yield i;
	}
}

g = gen();
for (let h of g) {
	console.log(h);
}

function* iterator() {
	yield "what";
	yield "is";
	yield "your";
	yield "name?";
}

f = iterator();
while (true) {
	let value = f.next().value;
	if (value) {
		console.log(value);
	} else break;
}

var number = Math.floor(Math.random()*100)+1;

var value = function(x,y) {
	return x+y;
}

console.log(value(1,2));

var f = function() {
	console.log("Tst");
}

function fff(i) {
	return i*2;
}

console.log(fff(2));

