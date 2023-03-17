const express = require("express");
const crypto = require("crypto"); //needed to hash blocks

const app = express();

// A basic implementation of a Blockchain

class Blockchain {
  constructor() {
    this.chain = [];
    this.createBlock(1, "Genesis Block", "0");
  }

  // method to create a new block given a nonce, when it was created, any data, and a previous hash value.
  createBlock(nonce, timestamp, data, previousHash) {
    const block = {
      blockNumber: this.chain.length + 1,
      timestamp,
      nonce: nonce,
      data: data,
      previousHash: previousHash,
    };
    block.hash = this.hashBlock(block);
    this.chain.push(block);
    return block;
  }

  // method to hash a block
  hashBlock(block) {
    // converting each field into a string
    const strBlock =
      block.blockNumber +
      block.previousHash +
      JSON.stringify(block.data) +
      block.timestamp.toString() +
      block.nonce;

    // feed the hashing function the block as a string to get the SHA256 hash in hex.
    const hash = crypto.createHash("sha256").update(strBlock).digest("hex");
    return hash;
  }

  // method to return the last block in the chain
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }
}
