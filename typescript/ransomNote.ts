function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;

    const magCount: { [key: string]: number } = {};
    for (let i = 0; i < magazine.length; i++) {
        const letter = magazine[i].toLowerCase();
        // Default behavior checks the keys.
        if (letter in magCount) {
            magCount[letter]++;
        } else {
            magCount[letter] = 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i].toLowerCase();
        if (letter in magCount) {
            magCount[letter]--;
            if (magCount[letter] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};
