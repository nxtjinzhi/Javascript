
function Graph() {
	var vertices = [];
	var adjList = new Dictionary();

	this.addVertex = function(v) {
		vertices.push(v);
		adjList.set(v, []);
	};

	this.addEdge = function(v, w) {
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	};
}

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
for (var i=0; i<myVertices.length; i++){ //{8}
	    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');


