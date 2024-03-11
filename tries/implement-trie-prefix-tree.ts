/*
 * Problem: https://leetcode.com/problems/implement-trie-prefix-tree/description
 * */

class TrieNode {
  children: Map<string, TrieNode>;
  end: boolean;

  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
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
    let curr = this.root;

    for (const letter of word) {
      if (!curr.children.has(letter)) {
        return false;
      }

      curr = curr.children.get(letter)!;
    }

    return curr.end;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;

    for (const letter of prefix) {
      if (!curr.children.has(letter)) {
        return false;
      }

      curr = curr.children.get(letter)!;
    }

    return true;
  }
}
