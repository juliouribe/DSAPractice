class CloneNode {
    val: number
    neighbors: CloneNode[]
    constructor(val?: number, neighbors?: CloneNode[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

function cloneGraph(node: CloneNode | null): CloneNode | null {
    if (node === null) {
        return null;
    }
    // Create a map to keep track which nodes we've visited.
    const cloned = new Map<CloneNode, CloneNode>().set(node, new CloneNode(node.val));
    // Use a queue and BFS approach to process nodes.
    const queue: CloneNode[] = [node];
    while (queue.length > 0) {
        // Get current node from queue of original nodes.
        const currentNode = queue.shift()!;
        // Get the respective cloned current using the original node as the key.
        const clonedCurrent = cloned.get(currentNode) as CloneNode;
        // Iterate through nodes and add neighbor nodes to the cloned map as well as to the queue.
        for (const neighbor of currentNode.neighbors) {
            if (!cloned.has(neighbor)) {
                cloned.set(neighbor, new CloneNode(neighbor.val));
                queue.push(neighbor);
            }
            // Update the cloned with respective neighbors as well.
            clonedCurrent.neighbors.push(cloned.get(neighbor)!);
        }
    }
    return cloned.get(node)!;
};
