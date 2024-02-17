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

const topologicalOrder = (graph) => {
    const rez = [];
    const counts = getCounts(graph);
    const visited = new Set();
    const queue = [];
    // Start a queue with nodes with no dependencies.
    for (const node in counts) {
        if (counts[node] === 0) queue.push(node);
    }
    // Iterate over queue, deduct deps of neighbors, and add new 0 deps nodes.
    while (queue.length) {
        const curr = queue.shift();
        visited.add(curr);
        rez.push(curr);
        for (const neighbor of graph[curr]) {
            counts[neighbor]--;
            if (counts[neighbor] === 0 && !(visited.has(neighbor))) {
                queue.push(neighbor);
            }
        }
    }
    return rez;
};

module.exports = {
    topologicalOrder,
};
