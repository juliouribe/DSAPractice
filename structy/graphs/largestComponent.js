const traverse = (node, graph, visited) => {
    if (visited.has(node)) return 0;
    let size = 1;
    visited.add(node);
    for (let neighbor of graph[node]) {
        size += traverse(neighbor, graph, visited);
    }
    return size;
}

const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;
    for (let node in graph) {
        const size = traverse(node, graph, visited);
        if (size > largest) {
            largest = size;
        }
    }
    return largest;
};

module.exports = {
    largestComponent,
};
