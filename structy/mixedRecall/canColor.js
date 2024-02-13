const canColor = (graph) => {
    const coloring = {}

    for (let node in graph) {
        if (!(node in coloring)) {
            if (!valid(graph, node, coloring, false)) {
                return false;
            }
        }
    }
    return true;
};

const valid = (graph, node, coloring, currentColor) => {
    if (node in coloring) return currentColor === coloring[node];

    coloring[node] = currentColor;

    for (let neighbor of graph[node]) {
        if (!valid(graph, neighbor, coloring, !currentColor)) {
            return false;
        }
    }

    return true;
}

module.exports = {
    canColor,
};
