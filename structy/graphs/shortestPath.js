const createGraph = (edges) => {
    const graph = {};
    for (const [a, b] of edges) {
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const shortestPath = (edges, nodeA, nodeB) => {
    /*
    The shortest route can be found using BFS. Visit one neighbor
    at a time and keep track of the different paths. Once we find
    our target, we should have our shortest path.
    */
    const graph = createGraph(edges);
    const visited = new Set();
    const queue = [[nodeA, 0]];

    while (queue.length) {
        const [curr, steps] = queue.shift();
        visited.add(curr);
        if (curr === nodeB) {
            return steps;
        }
        for (const neighbor of graph[curr]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, steps + 1]);
            }
        }
    }
    return -1;
};

module.exports = {
    shortestPath,
};
