/*
Finding the shortest path to the thing you're looking for. Its a "greedy" algo.
Uses only non-negative weights.

prev = [-1, ...]
seen = [f, ...]

Put a zero wherever the source is
distance = [infinities, ... 0]

Start with the nearest node that we haven't seen. Source node will be zero.

while hasUnvisited()
  lo = getLowestUnseen()
  seen[lo] = true

  for edge in lo
    if seen[edge] continue
    dist = dists[lo] + edge.weight
    if dist < dists[edge] {
      prev[edge] = lo
      dists[edge] = dist
    }
*/

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; ++i) {
    if (seen[i]) {
      continue;
    }

    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }
  return idx;
}

export default function dijstra_list(
  source: number,
  sink: number,
  arr: number[]): number[] {
    const seen = new Array(arr.length).fill(false);
    const prev = new Array(arr.length).fill(-1);
    const dists = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
      const curr = getLowestUnvisited(seen, dists);
      seen[curr] = true;

      const adjs = arr[curr];
      for (let i = 0; i < adjs.length; ++i) {
        const edge = adjs[i];
        if (seen[edge.to]) {
          continue;
        }

        const dist = dists[curr] + edge.weight;
        if (dist < dists[edge.to]) {
          dists[edge.to] = dist;
          prev[edge.to] = curr;
        }
      }
    }

    const out: number[] = [];
    let curr = sink;
    while (prev[curr] != -1) {
      out.push(curr);
      curr = prev[curr];
    }
    out.push(source)
    return out.reverse();
  }
