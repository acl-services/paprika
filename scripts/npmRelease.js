#!/usr/bin/env node
const { PAPRIKA_NPM_TOKEN, SEMAPHORE_GIT_BRANCH } = process.env;
const baseBranch = "master"; // this should be the one that we want to operate.

if (SEMAPHORE_GIT_BRANCH === "UX-498-automate-release-process") {
  console.log("BRANCH:", "👍");
}

console.log("========================");
console.log("========================");
console.log(process.env);
console.log("========================");

process.exit(0);
