function lengthOfLongestSubstring(s: string): number {
    /*
    Longest substring is the longest sequence of unique characters.
    1. Iterate over characters with two pointers and use a map to track what has been seen.
    2. Once we repeat a character, adjust the left pointer until we drop the repeated char.
    3. Keep iterating with the right pointer.
    */
    let map: Map<string, number> = new Map();
    let longest = 0;
    let curr = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // Set the value to 1 or if its not unique, add plus 1 to current value.
        // Map values will pretty much always be 1, 2, or undefined.
        map.set(char, map.has(char) ? map.get(char) as number + 1 : 1);
        let val = map.get(char) as number;
        curr++;
        // Val will be larger than 1 when we repeat a character.
        // We'll try to adjust our window to drop the repeat character
        while (val > 1) {
            // We'll pretty much move our pointer until we find the repeat
            // character from our string in the hash map, the 2.
            curr--;
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) as number - 1);
            val = map.get(char) as number;
            left++;
        }
        longest = Math.max(curr, longest);
    }
    return longest;
};
