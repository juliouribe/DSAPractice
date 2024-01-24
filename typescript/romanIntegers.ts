const symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function romanToInt(s: string): number {
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = s[i] as string;
        // curr symbol is less than one symbol to the right when looking at 9s and 4s, 40s and 90s, and so on.
        if (symbols[curr] < symbols[s[i + 1]]) {
            value -= symbols[curr] as number;
        } else {
            value += symbols[curr] as number;
        }
    }
    return value;
};
