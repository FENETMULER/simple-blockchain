const express = require("express");
const crypto = require("crypto");

const app = express();

class Blockchain {
  constructor() {
    this.chain = [];
    this.createBlock(1, "Genesis Block", "0");
  }
}
