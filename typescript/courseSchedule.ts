function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjList: number[][] = Array.from({ length: numCourses }, () => []);

    for (let i = 0; i < prerequisites.length; i++) {
        const vertex = prerequisites[i][0];
        const edge = prerequisites[i][1];
        adjList[vertex].push(edge);
    }

    return topoSort(numCourses, adjList);
};

function topoSort(numCourses: number, adjList: number[][]): boolean {
    const indegreeEdge = new Array(numCourses).fill(0);
    const queue = [];
    const topoSort = [];

    // Indegree
    for (let i = 0; i < numCourses; i++) {
        for (let it of adjList[i]) {
            indegreeEdge[it]++
        }
    }
    // Zero incoming edge vertex;
    for (let i = 0; i < numCourses; i++) {
        if (indegreeEdge[i] === 0) {
            queue.push(i);
        }
    }

    // TopoSort
    while (queue.length) {
        const node = queue.shift();
        topoSort.push(node);

        // Disconnect node
        for (let it of adjList[node]) {
            indegreeEdge[it]--;
            if (indegreeEdge[it] === 0) {
                queue.push(it)
            }
        }
    }

    return topoSort.length === numCourses
}
