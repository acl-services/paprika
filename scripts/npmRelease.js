#!/usr/bin/env node
const shelljs = require("shelljs");

const { PAPRIKA_NPM_TOKEN, SEMAPHORE_GIT_BRANCH, SEMAPHORE_GIT_DIR } = process.env;
// const baseBranch = "master"; // this should be the one that we want to operate.

if (SEMAPHORE_GIT_BRANCH === "UX-498-automate-release-process") {
  console.log("BRANCH:", "👍");
}

// writen npmrc to authenticate our user
shelljs.cd(`${SEMAPHORE_GIT_DIR}`);
shelljs.ls("/");
shelljs.exec(`echo //registry.npmjs.org/:_authToken=${PAPRIKA_NPM_TOKEN} > .npmrc`);
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
shelljs.ls("/");
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
process.exit(0);
