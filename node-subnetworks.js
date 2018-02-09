/**
 * https://js.checkio.org/mission/node-subnetworks/
 */

function compareNodes(n, n_i, m, m_i) {
	if (n.length==2 && m.length==2 && JSON.stringify(n)!=JSON.stringify(m)) return -1;
	var nodes = []
	for (var i=0; i<n.length; i++) {
		nodes.push(n[i])
	}
	for (var i=0; i<m.length; i++) {
		if (nodes.indexOf(m[i])<0) nodes.push(m[i])
	}
	//console.log(n, n_i, m, m_i, nodes)
	if (nodes.length != (n.length + m.length)) {
		if (n.length < m.length) return n_i
		else return m_i
	}
	
	return -1
}

function mergeNodes(networks) {
	var nodes = []
	var i = 0
	while (i<networks.length-1) {
		for (var j=i+1; j<networks.length; j++) {
			var checkResult = compareNodes(networks[i], i, networks[j], j)
			if (checkResult>=0) networks[checkResult] = []
			//console.log(checkResult)
		}
		i++;
	}
	return networks
}

function subnetworks(networks, crashedNodes) {
	crashedNodes.forEach(function(n) {
		for (var i=0; i<networks.length; i++) {
			if (n == networks[i][0]) networks[i].splice(0,1)
			if (n == networks[i][1]) networks[i].splice(1,1)
		}
	})
	console.log(networks)
	var mergeResult = mergeNodes(networks)
	var count = 0;
	mergeResult.forEach((x)=>{
		if (x.length) count++;
	})
	console.log(count)
}

subnetworks([
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D']
], ['B']) == 2
subnetworks([
    ['A', 'B'],
    ['A', 'C'],
    ['A', 'D'],
    ['D', 'F']
], ['A']) == 3
subnetworks([
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D']
], ['C', 'D']) == 1