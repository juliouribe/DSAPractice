function canFinish(numCourses: number, prereqs: number[][]): boolean {
    const adjList: number[][] = Array.from({ length: numCourses }, () => []);

    // Go through node connections and update the adjacency list.
    for (let i = 0; i < prereqs.length; i++) {
        const [ start, target] = prereqs[i];
        adjList[start].push(target);
    }

    const indegreeEdge = new Array(numCourses).fill(0);
    const queue = [];
    const topoSort = [];

    // Indegree. I think this is the number of courses that rely on a given course.
    for (let i = 0; i < numCourses; i++) {
        for (let target of adjList[i]) {
            indegreeEdge[target]++
        }
    }
    // Zero incoming edge vertex. Courses with no prereqs so we are free to start with them.
    for (let i = 0; i < numCourses; i++) {
        if (indegreeEdge[i] === 0) {
            queue.push(i);
        }
    }

    // TopoSort
    while (queue.length) {
        // We are starting with nodes that have no prereqs.
        const node = queue.shift();
        // We're only adding nodes with no dependencies to the topoSort array.
        // If we don't add all courses into this array, then we'll have impossible courses.
        topoSort.push(node);

        // Disconnect node by looking up the nodes we're connected to and decrementing
        // the indegree edges for each neighbor.
        for (let target of adjList[node]) {
            indegreeEdge[target]--;
            // Once a neighbor has no more dependencies we can add it to the queue.
            if (indegreeEdge[target] === 0) {
                queue.push(target)
            }
        }
    }

    return topoSort.length === numCourses
}
