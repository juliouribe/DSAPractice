type TrieNodeTwo = {
    value?: string,
    exists: boolean,
    children: Map<string, TrieNodeTwo>
}

function createTrieNodeTwo(): TrieNodeTwo {
    return {
        children: new Map<string, TrieNodeTwo>(),
        exists: false
    }
}

class TrieTwo {
    private head: TrieNodeTwo;
    constructor() {
        this.head = createTrieNodeTwo();
    }

    insert(word: string): void {
        let current = this.head;
        const wordClean = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            const letter = wordClean[i];
            // If the letter doesn't exist in the children, we'll create a new node.
            if (!current.children.get(letter)) {
                current.children.set(letter, createTrieNodeTwo());
            }
            current = current.children.get(letter) as TrieNodeTwo;
        }
        // At the end of the word, we've reached the terminating letter.
        current.exists = true;
        current.value = word
    }

    search(word: string): boolean {
        let current = this.head;
        const wordClean = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            current = current.children.get(wordClean[i]);
            if (!current) return false
        }
        return current.exists;
    }

    startsWith(prefix: string): boolean {
        let current: TrieNodeTwo | undefined = this.head;
        const prefixClean = prefix.toLowerCase();
        for (let i = 0; i < prefix.length; i++) {
            current = current.children.get(prefixClean[i])
            if (!current) return false;
        }
        const stack: TrieNodeTwo[] = [current];
        while (stack.length) {
            current = stack.pop() as TrieNodeTwo;
            if (current.exists) {
                return true;
            }
            for (let node of current.children.values()) {
                stack.push(node);
            }
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
