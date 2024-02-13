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

const isBipartite = (graph, node, coloring, currentColor) => {
    if (node in coloring) return coloring[node] === currentColor;

    coloring[node] = currentColor;

    for (let neighbor of graph[node]) {
        if (!isBipartite(graph, neighbor, coloring, !currentColor)) {
            return false;
        }
    }

    return true;
}

const tolerantTeams = (rivalries) => {
    const graph = createGraph(rivalries);

    const coloring = {}
    for (let node in graph) {
        if (!(node in coloring) && !isBipartite(graph, node, coloring, false)) {
            return false;
        }
    }

    return true;
};

module.exports = {
    tolerantTeams,
};
