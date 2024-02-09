const connectedComponentsCount = (graph) => {
    /*
    Looks like a connected component is a piece of a graph we're several
    nodes that have edges to each other.

    We can use DFS to start on a node we have not seen yet, then traverse
    neighbors until we find a neighbor we've visited. That's one. Then go
    to the next node that we haven't visited yet.
    */
    let visited = new Set();
    let components = 0;
    // Iterate over nodes of graph at the component level.
    for (let node of Object.keys(graph)) {
        // Skip visited nodes from previous components.
        if (visited.has(node)) {
            continue;
        } else {
            // Initiate a stack to visit all connected nodes within a component.
            const stack = [node];
            components++;
            visited.add(String(node))
            while (stack.length) {
                const curr = stack.pop();
                visited.add(String(curr));
                for (const neighbor of graph[curr]) {
                    if (visited.has(String(neighbor))) {
                        continue;
                    } else {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
    return components;
};

// const connectedComponentsCount = (graph) => {
//     const visited = new Set();
//     let count = 0;
//     for (let node in graph) {
//         if (explore(graph, node, visited) === true) {
//             count += 1;
//         }
//     }
//     return count;
// };


// const explore = (graph, current, visited) => {
//     if (visited.has(String(current))) return false;

//     visited.add(String(current));

//     for (let neighbor of graph[current]) {
//         explore(graph, neighbor, visited);
//     }

//     return true;
// };

module.exports = {
    connectedComponentsCount,
};
