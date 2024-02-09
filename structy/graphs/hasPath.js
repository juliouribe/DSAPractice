const hasPath = (graph, src, dst) => {
    // DFS looks good here.
    const stack = [src];

    while (stack.length) {
        const curr = stack.pop();
        if (curr == dst) {
            return true;
        }
        for (let neighbor of graph[curr]) {
            stack.push(neighbor);
        }
    }
    return false;
};

module.exports = {
    hasPath,
};
