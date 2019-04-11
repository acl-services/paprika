/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

const source = "./svg/";
const destination = "../index.js";
const excludeFiles = [".DS_Store"];

function toPascalCase(str) {
  return str
    .match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("");
}

(async () => {
  const list = await readdir(source);

  const names = list
    .filter(file => !excludeFiles.includes(file))
    .map(file => toPascalCase(path.basename(file, ".svg")));
  const exports = names.map(name => `export { default as ${name} } from "./components/${name}.js";`);

  await writeFile(path.join(source, destination), `${exports.join("\n")}\n`)
    .then(() => {
      console.log("\n✅ Wrote index.js.\n");
    })
    .catch(error => {
      console.error("\n❌ Error writing index.js.\n", error);
    });
})();
