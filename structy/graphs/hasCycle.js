const explore = (graph, node, visiting, visited) => {
    if (visited.has(node)) return false;

    if (visiting.has(node)) return true;

    visiting.add(node);
    for (let neighbor of graph[node]) {
        if (explore(graph, neighbor, visiting, visited)) {
            return true;
        }
    }
    visiting.delete(node);
    visited.add(node);

    return false;
}

const hasCycle = (graph) => {
    /*
    For each node, kick of DFS and see if you revisit a node.
    */
    const visited = new Set();
    for (let node in graph) {
        if (explore(graph, node, new Set(), visited)) {
            return true;
        }
    }
    return false;
};

module.exports = {
    hasCycle,
};
