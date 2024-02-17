const tokenReplace = (s, tokens) => {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char !== '$') {
            result += char;
            continue;
        }
        let token = '$';
        do {
            i++;
            token += s[i];
            if (s[i] === '$') {
                break;
            }
        } while (i < s.length);
        result += tokens[token];
    }
    return result;
};

module.exports = {
    tokenReplace,
};
