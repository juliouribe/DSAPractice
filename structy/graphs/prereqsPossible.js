const createGraph = (numCourses, prereqs) => {
    const graph = {};
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [a, b] of prereqs) {
        graph[a].push(b);
    }
    return graph;
}

const hasCycle = (graph, node, visited, visiting) => {
    if (visited.has(node)) return false;
    if (visiting.has(node)) return true;

    visiting.add(node);
    for (let neighbor of graph[node]) {
        if (hasCycle(graph, neighbor, visited, visiting)) {
            return true;
        }
    }

    visiting.delete(node);
    visited.add(node);
    return false;
}

const prereqsPossible = (numCourses, prereqs) => {
    const graph = createGraph(numCourses, prereqs);

    const visited = new Set();
    for (const node in graph) {
        if (hasCycle(graph, node, visited, new Set())) {
            return false;
        }
    }
    return true;
};

module.exports = {
    prereqsPossible,
};
