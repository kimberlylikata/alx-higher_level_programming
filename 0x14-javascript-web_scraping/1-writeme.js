#!/usr/bin/node
const process = require('process');
const fs = require('fs');

const file = process.argv[3];
fs.writeFile(process.argv[2], file, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});