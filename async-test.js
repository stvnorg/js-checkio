function getQuote() {
  var quote;

  return new Promise(function(resolve, reject) {
	function add(x,y) { return x+y }
	resolve(add(1,2));
  });
}
 
async function main() {
  var quote = await getQuote();
  console.log(quote);
}

main();
console.log('Ron once said,');
