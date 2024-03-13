/*
 * Problem: https://leetcode.com/problems/design-add-and-search-words-data-structure/description
 * */

/*First Solution*/

class TrieNode {
  children: Map<string, TrieNode>;
  end: boolean;

  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class WordDictionary {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let curr = this.root;

    for (const letter of word) {
      if (!curr.children.has(letter)) {
        curr.children.set(letter, new TrieNode());
      }

      curr = curr.children.get(letter)!;
    }

    curr.end = true;
  }

  search(word: string): boolean {
    function dfs(j: number, child: TrieNode) {
      let curr = child;

      for (let index = j; index < word.length; index++) {
        const letter = word[index];

        if (letter === ".") {
          for (const child of curr.children.values()) {
            if (dfs(index + 1, child)) return true;
          }

          return false;
        } else {
          if (!curr.children.has(letter)) return false;
          curr = curr.children.get(letter)!;
        }
      }

      return curr.end;
    }

    return dfs(0, this.root);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
