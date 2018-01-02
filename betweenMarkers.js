/**
 * https://js.checkio.org/mission/between-markers/
 */

function betweenMarkers(text, begin, end) {
	var m = text.indexOf(begin);
	var n = text.indexOf(end);
	if (m<0) m = 0;
	else m += begin.length;
	if (n<0) n = text.length;
	if (m>n) return ''
	console.log(m,n)
	console.log(text.substring(m,n));
}

betweenMarkers('What is >apple<', '>', '<') == 'apple'
betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'
betweenMarkers("<head><title>My new site</title></head>","<title>","</title>")
betweenMarkers("No <hi>",">","<")