/*

Cycle: Start at Node(x) and can get back to Node(x) while traversing at least 3 nodes
Acyclic: No cycles in the graph
connected: when every node has a path to another node
directed: when there is a direction to the connections. One way following on Twitter
undirected: !directed. Like mutual friends on Facebook.
weighted: the edges have a weight associated with them. Think traffic with maps and routes.
dag: directed, acyclic graph.

Node: a point or vertex on the graph
edge: the connection between two nodes

O(V * E): The number of nodes/vertexes times the number of edges

Two ways to represent a graph

1) Adjacency List - More common
A array of arrays where each subarray contains the edges per node. You can also
store objects to show to and weights. {to; 0, w: 3}

2) Adjacency Matrix - lots of memory and setup O(v^2)
A V by V matrix representing connections to other nodes with 1's and 0's. Instead
of 1's you can also use weights to represent the connections.

Basic Searches
BFS and DFS still exist on a graph.
*/

// BFS on an Adjancency Matrix
export function bfs(
  graph: number[],
  source: number,
  needle: number): number[] | null {
  // with dfs, we can use a pre and post to push/pop. Maintain structure
  // prev = [-1, ....] with whom I've come
  // seen = [t, f, f ....]
  // Q = [0] root node
  /*
  do {
    curr = Q.deque();
    if curr = needle
      break
    for c in curr
      if seen continue
      seen[c] = true
      prev[c] = curr
      Q.enqueue(c);
  } while (Q.len)
  prev[needle] = -1
  */
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;
    if (curr === needle) {
      break
    }
    const adjs = graph[curr];
    for (let i = 0; i < graph.length; i++) {
      if (adjs[i] === 0) {
        continue
      }

      if (seen[i]) {
        continue
      }

      seen[i] = true;
      prev[i] = curr;
    }
  } while (q.length);

  if (prev[needle] === -1) {
    return null
  }

  let curr = needle;
  const out: number[] = [];
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
}

function walk(graph: number[],
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[]): boolean {
    if (seen[curr]) {
      return false;
    }
    seen[curr] = true;

    // pre
    path.push(curr);

    if (curr === needle) {
      return true;
    }
    // recurse
    const list = graph[curr];
    for (let i = 0; i < list.length; ++i) {
      const edge = list[i];
      if (walk(graph, edge.to, needle, seen, path)) {
        return true;
      }
    }

    // post
    path.pop();

    return false;
  }

// DFS on an AdjacencyList
export function dfs(
  graph: number[],
  source: number,
  needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length == 0) {
      return null;
    }

    return path;
 }
