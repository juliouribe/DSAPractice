const combineIntervals = (intervals) => {
    intervals.sort((a, b) => (a[0] - b[0]));
    const result = [intervals[0]];
    for (const [currStart, currEnd] of intervals.slice(1)) {
        const [prevStart, prevEnd] = result[result.length - 1];
        // Check if there is overlap between the two.
        if (currStart <= prevEnd) {
            if (currEnd > prevEnd) {
                result[result.length - 1][1] = currEnd;
            }
        } else {
            result.push([currStart, currEnd]);
        }
    }
    return result;
};

module.exports = {
    combineIntervals,
};
