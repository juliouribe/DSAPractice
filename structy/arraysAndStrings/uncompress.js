/*
We used a string with 0-9 to figure out if a string character was an integer.
Since this is a fixed length, it shouldn't slow things down too much.

To convert from string to integer, we used Number(strInt). I think parseInt could
work as well. We could have also used a regex expression for check if string
character is an integer.

const regex = /^[0-9]+$/;

regex.test('5'); // true
regex.test('a'); // false
regex.test('123'); // true

*/

const uncompress = (s) => {
    let result = '';
    let i = 0;
    let j = 0;
    const numbers = '0123456789';
    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j += 1;
        } else {
            const num = Number(s.slice(i, j));
            for (let count = 0; count < num; count++) {
                result += s[j];
            }
            j += 1;
            i = j;
        }
    }
    return result;
};

module.exports = {
    uncompress,
};
