type TrieNode = {
    value?: string,
    children: Map<string, TrieNode>,
    exists: boolean,
}

function createTrieNode(): TrieNode {
    return {
        children: new Map<string, TrieNode>(),
        exists: false
    };
}

class Trie {
    public head: TrieNode;
    constructor() {
        this.head = createTrieNode();
    }
    addWords(words: string[]): void {
        for (const word of words) {
            let curr = this.head;
            for (const char of word) {
                if (!(curr.children[char])) {
                    const node = createTrieNode();
                    curr.children[char] = node;
                }
                curr = curr.children[char];
            }
            curr.exists = true;
            curr.value = word;
        }
    }
}

function searchWord(
    board: string[][], row: number, col: number, node: TrieNode,
    visited: Set<string>, result: Set<string>
): void {
    // Off the board
    if ((row < 0 || row >= board.length) || (col < 0 || col >= board[0].length)) {
        return;
    }
    const coords = row + ',' + col;
    // Already visited or letter not in the current node's children (not in trie)
    if (!(node.children[board[row][col]]) || visited.has(coords)) {
        return;
    }
    visited.add(coords);
    node = node.children[board[row][col]];
    if (node.exists) {
        result.add(node.value as string);
    }
    searchWord(board, row + 1, col, node, visited, result);
    searchWord(board, row - 1, col, node, visited, result);
    searchWord(board, row, col + 1, node, visited, result);
    searchWord(board, row, col - 1, node, visited, result);
    visited.delete(coords);
}

function findWords(board: string[][], words: string[]): string[] {
    const result = new Set<string>();
    const wordsTrie = new Trie();
    wordsTrie.addWords(words);
    const visited = new Set<string>();

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (result.size === words.length) break;
            searchWord(board, row, col, wordsTrie.head, visited, result);
        }
    }

    return Array.from(result);
};
