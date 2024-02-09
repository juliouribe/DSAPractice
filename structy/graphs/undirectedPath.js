const createGraph = (edges) => {
    const graph = {};
    for (const [a, b] of edges) {
        if (!(a in graph)) {
            graph[a] = [b];
        } else {
            graph[a].push(b);
        }
        if (!(b in graph)) {
            graph[b] = [a];
        } else {
            graph[b].push(a);
        }
    }
    return graph;
}
const undirectedPath = (edges, nodeA, nodeB) => {
    /*
    Undirected means you can go back and forth between nodes so we should
    keep track of which nodes we've visited. DFS still looks good with a stack.

    I have a list of edges. Build a graph first?
    Once we know how many nodes we have we can create a visited array.
    */
    // Build a graph adjancency list out of the edges.
    const graph = createGraph(edges);
    // Build seen array for each unique node.
    const seen = new Set;
    // Now we can traverse the nodes using the adjancency list and DFS approach.
    const stack = [nodeA];
    while (stack.length) {
        const curr = stack.pop();
        seen.add(curr);
        if (curr === nodeB) {
            return true;
        }
        for (let neighbor of graph[curr]) {
            // Skip neighbor if we've already seen it.
            if (seen.has(neighbor)) {
                continue;
            } else {
                stack.push(neighbor);
            }
        }
    }
    return false;
};

module.exports = {
    undirectedPath,
};
