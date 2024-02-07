/*
String concatenation is O(n) run time. Use an array and push instead to append
chars and then join them when you return. It takes a O(n^2) runtime and turns it
into O(n) again.


*/

const compress = (s) => {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        const prev = s[i];
        let count = 1;
        while (prev === s[i + 1] && i < s.length) {
            count++;
            i++;
        }
        if (count > 1) {
            result.push(`${count}${prev}`);
        } else {
            result.push(`${prev}`);
        }
    }
    return result.join('');
};

module.exports = {
    compress,
};
