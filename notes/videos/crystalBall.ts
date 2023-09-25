/*
Given two crystal balls, figure out at what level a ball will break when dropped from that level or above.

Can be represented by an array of false values that eventually become true.
If we start at zero and linearly walk up the array, then its slow.
With 2 crystal balls, we can only afford to break one before we have one final ball
that needs to be dropped from the correct level.

The solution is to walk up in increments of square root of N. Once we break a
ball we can walk it back from left to right. The runtime is O(square root N)
*/

export default function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;

  // Find the first place where the crystal ball would break.
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }
  // Go back one jumpAmount
  i -= jumpAmount;

  // Iterate up to j jumpAmount times while making sure that i doesn't exceed array length.
  // J is not used to index. Its just number of times to do this. We still increment
  // i for indexing.
  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
