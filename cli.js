#!/usr/bin/env node

var portunhol = require('./joelsantanes.js').joelsantanate;
var lazy = require("lazy");

new lazy(process.stdin).lines.forEach(function(line) {
  console.log(joelsantanes(line.toString()));
});

process.stdin.resume();
