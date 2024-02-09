const traverse = (graph, node, distance) => {
    if (node in distance) return distance[node];

    let maxLength = 0;
    for (let neighbor of graph[node]) {
        const attempt = traverse(graph, neighbor, distance);
        if (attempt > maxLength) {
            maxLength = attempt;
        }
    }
    distance[node] = maxLength + 1;
    return distance[node];
}

const longestPath = (graph) => {
    // Find terminal nodes of the graph;
    const distance = {}
    for (let node in graph) {
        if (graph[node].length === 0) {
            distance[node] = 0;
        }
    }
    let longest = 0;
    for (let node in graph) {
        const length = traverse(graph, node, distance);
        if (length > longest) {
            longest = length;
        }
    }
    return longest;
};

module.exports = {
    longestPath,
};
