type TrieNode = {
    value?: string,
    exists: boolean,
    children: TrieNode[]
}

function createTrieNode(): TrieNode {
    return {
        children: [],
        exists: false
    }
}

// Char code for 'a'.
const start = 'a'.charCodeAt(0);

// Gets char code for an index in a word.
function getIdx(word: string, idx: number): number {
    return word.toLowerCase().charCodeAt(idx) - start;
}

class Trie {
    private head: TrieNode;
    constructor() {
        this.head = createTrieNode();
    }

    insert(word: string): void {
        let current: TrieNode = this.head;
        for (let i = 0; i < word.length; i++) {
            const letter = getIdx(word, i)
            // If the letter doesn't exist in the children, we'll create a new node.
            if (!current.children[letter]) {
                current.children[letter] = createTrieNode();
            }
            current = current.children[letter];
        }
        // At the end of the word, we've reached the terminating letter.
        current.exists = true;
        current.value = word
    }

    search(word: string): boolean {
        let current = this.head;
        for (let i = 0; i < word.length; i++) {
            if (current) {
                current = current.children[getIdx(word, i)]
            } else {
                return false;
            }
        }
        if (current) {
            return current.exists;
        } else {
            return false;
        }
    }

    startsWith(prefix: string): boolean {
        let current = this.head;
        for (let i = 0; i < prefix.length; i++) {
            if (current) {
                current = current.children[getIdx(prefix, i)]
            } else {
                return false;
            }
        }
        return this.findRecursively(current);
    }

    private findRecursively(node: TrieNode | undefined): boolean {
        if (!node) {
            return false;
        }
        if (node.exists) {
            return true;
        }
        // Keep searching along as long and add the word if they are the end of a word.
        for (let i = 0; i < node.children.length; i++) {
            if (this.findRecursively(node.children[i])) return true;
        }
        return false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
