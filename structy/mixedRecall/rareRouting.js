const rareRouting = (n, roads) => {
    const graph = createGraph(n, roads);
    const visited = new Set();
    const valid = validate(graph, '0', visited, null);
    return valid && visited.size === n;
};

const createGraph = (n, roads) => {
    const graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [a, b] of roads) {
        graph[a].push(String(b));
        graph[b].push(String(a));
    }
    return graph;
};

const validate = (graph, node, visited, lastNode) => {
    if (visited.has(node)) return false;
    visited.add(node);
    for (const neighbor of graph[node]) {
        if (lastNode !== neighbor) {
            if (!validate(graph, neighbor, visited, node)) {
                return false;
            }
        }
    }
    return true;
}

module.exports = {
    rareRouting,
};
