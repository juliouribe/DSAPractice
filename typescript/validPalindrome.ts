function isPalindromeTS(s: string): boolean {
    let clean = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            clean += s[i].toLowerCase();
        }
    }
    const cleanList = clean.split('');
    const reverseCopy = cleanList.slice().reverse()
    return cleanList.join('') === reverseCopy.join('');
};
