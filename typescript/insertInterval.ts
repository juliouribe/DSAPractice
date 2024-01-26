function insert(intervals: number[][], newInterval: number[]): number[][] {
    const output: number[][] = [];

    // Iterate through all of the intervals.
    for (let i = 0; i < intervals.length; i++) {
        // If our new interval is before the start of intervals then we can insert as is.
        if (newInterval[1] < intervals[i][0]) {
            output.push(newInterval);
            return output.concat(intervals.slice(i));
        } else if (newInterval[0] > intervals[i][1]) {
            // If the new interval begins after curr interval, leave it alone.
            output.push(intervals[i]);
        } else {
            // If we get to here, we are overlapping in some way.
            // Merge the intervals so it begins at the earlier of starts and
            // ends on the latest of ends.
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ]
        }
    }
    // We'll always add this new interval at the end. If we didn't overlap at the start,
    // we'd return early on the first if statement. If we didn't overlap in the middle
    // we would continue to iterate and find potential overlap.
    // On the condition that we merged the new interval, we'd still keep checking remaining
    // intervals and we'd need this push anyway. If we never overlapped and our interval
    // was the latest at the end we want this push.
    output.push(newInterval);

    return output;
};
