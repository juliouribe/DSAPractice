const createGraph = (prereqs, numCourses) => {
    const graph = {};
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [a, b] of prereqs) {
        graph[a].push(b);
    }
    return graph;
}

const findLength = (graph, node, deps) => {
    if (node in deps) return deps[node];

    let maxLength = 0;
    for (let neighbor of graph[node]) {
        const check = findLength(graph, neighbor, deps);
        if (check > maxLength) {
            maxLength = check;
        }
    }
    deps[node] = maxLength + 1;
    return deps[node];
}

const semestersRequired = (numCourses, prereqs) => {
    const graph = createGraph(prereqs, numCourses);
    const deps = {};
    for (let course in graph) {
        if (graph[course].length === 0) {
            deps[course] = 1;
        }
    }
    let semesters = 0;
    for (let node in graph) {
        const length = findLength(graph, node, deps);
        if (length > semesters) {
            semesters = length;
        }
    }
    return semesters;
};

module.exports = {
    semestersRequired,
};
