#!/usr/bin/env node

const { CI } = process.env;
const { exec } = require("child_process");

if (!CI) {
  console.log("🚀 Uploader server ready");
  exec("cd packages/Uploader/server && php -S localhost:9000");
  return;
}
console.log("Exit without staring the uploader server");
