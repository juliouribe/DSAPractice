const createGraph = (edges) => {
    const graph = {};
    for (const [a, b] of edges) {
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
    }
    return graph;
}

const getCounts = (graph) => {
    const counts = {};
    for (const node in graph) {
        counts[node] = 0;
    }
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            counts[neighbor]++;
        }
    }
    return counts;
}

const safeCracking = (hints) => {
    const code = [];
    const graph = createGraph(hints);
    const counts = getCounts(graph);
    const queue = [];
    for (const node in graph) {
        if (counts[node] === 0) {
            queue.push(node);
        }
    }

    while (queue.length) {
        const curr = queue.shift();
        code.push(curr);
        for (const neighbor of graph[curr]) {
            counts[neighbor]--;
            if (counts[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return code.join('');
};

module.exports = {
    safeCracking,
};
