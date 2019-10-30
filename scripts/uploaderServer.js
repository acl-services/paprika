#!/usr/bin/env node

const { CI } = process.env;
const { exec } = require("child_process");

if (!CI) {
  console.log("🚀 Uploader server ready");
  exec("php -S localhost:9000");
}
console.log("Exit without staring the uploader server");
process.exit(0);
