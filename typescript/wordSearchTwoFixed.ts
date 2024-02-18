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
                if (!(curr.children.get(char))) {
                    const node = createTrieNode();
                    curr.children.set(char, node);
                }
                curr = curr.children.get(char);
            }
            curr.value = word;
        }
    }
}
function hasChar(node: TrieNode, char: string): boolean {
    return node.children.has(char);
}

function getNode(node: TrieNode, char: string): TrieNode | null {
    return node.children.get(char);
}

function searchWord(
    board: string[][], row: number, col: number, node: TrieNode, result: Set<string>): void {
    // Off the board
    if ((row < 0 || row >= board.length) || (col < 0 || col >= board[0].length)) {
        return;
    }
    const coords = row + ',' + col;
    const currChar = board[row][col];
    // Already visited (#) or letter not in the current node's children (not in trie)
    if (currChar === '#' || !(hasChar(node, currChar))) return;
    // if (visited.has(coords) || !(hasChar(node, currChar))) return;

    board[row][col] = '#';
    // visited.add(coords);
    node = getNode(node, currChar);
    if (node.value) {
        result.add(node.value);
    }
    // searchWord(board, row + 1, col, node, result, visited);
    // searchWord(board, row - 1, col, node, result, visited);
    // searchWord(board, row, col + 1, node, result, visited);
    // searchWord(board, row, col - 1, node, result, visited);

    searchWord(board, row + 1, col, node, result);
    searchWord(board, row - 1, col, node, result);
    searchWord(board, row, col + 1, node, result);
    searchWord(board, row, col - 1, node, result);

    board[row][col] = currChar;
    // visited.delete(coords);
}

function findWords(board: string[][], words: string[]): string[] {
    const result = new Set<string>();
    const visited = new Set<string>();
    const wordsTrie = new Trie();
    wordsTrie.addWords(words);

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (result.size === words.length) break;
            // searchWord(board, row, col, wordsTrie.head, result, visited);
            searchWord(board, row, col, wordsTrie.head, result);

        }
    }

    return Array.from(result);
};

