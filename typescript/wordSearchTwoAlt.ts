class TrieNode {
    private nodes = new Map<string, TrieNode>();
    word: string | null = null;
    constructor() {

    }
    insert(word: string): void {
        let curr = this as TrieNode;
        for (const char of word) {
            if (!curr.nodes.has(char)) {
                curr.nodes.set(char, new TrieNode());
            }
            curr = curr.nodes.get(char);
        }
        curr.word = word;
    }
    hasChar(char: string): boolean {
        return this.nodes.has(char);
    }
    getNode(char: string): TrieNode | null {
        return this.nodes.get(char);
    }
}

function search(row: number, col: number, board: string[][], node: TrieNode, result: string[]) {
    const maxRows = board.length;
    const maxCols = board[0].length;
    if (row < 0 || row >= maxRows || col < 0 || col >= maxCols) return;

    const currChar = board[row][col];
    // Instead of using a visited set, they're flipping the tile.
    if (currChar === '#' || !node.hasChar(currChar)) return;
    node = node.getNode(currChar);
    // Only the last letter in a word has this value. Others are null.
    if (node.word) {
        result.push(node.word);
        // Once the word has been found you can't reuse it. Interesting.
        node.word = null;
    }
    // mark as visited
    board[row][col] = '#';
    search(row + 1, col, board, node, result);
    search(row - 1, col, board, node, result);
    search(row, col + 1, board, node, result);
    search(row, col - 1, board, node, result);
    // Reset tile after returning from all DFS calls from this tile.
    board[row][col] = currChar;
}

function findWords(board: string[][], words: string[]): string[] {
    const result: string[] = [];
    const root = new TrieNode();
    for (const word of words) {
        root.insert(word);
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            search(row, col, board, root, result);
        }
    }
    return result;
};
