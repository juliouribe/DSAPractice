const substituteSynonyms = (sentence, synonyms) => {
    const words = sentence.split(' ');
    const arrays = generate(words, synonyms);
    return arrays.map(subarray => subarray.join(' '));
};

const generate = (words, synonyms) => {
    if (words.length === 0) return [[]];

    const firstWord = words[0];
    const remainingWords = words.slice(1);
    if (firstWord in synonyms) {
        const result = [];
        const subarrays = generate(remainingWords, synonyms);
        for (let synonym of synonyms[firstWord]) {
            result.push(...subarrays.map(subarray => [synonym, ...subarray]));
        }
        return result;
    } else {
        const subarrays = generate(remainingWords, synonyms);
        return subarrays.map(subarray => [firstWord, ...subarray]);
    };
};
