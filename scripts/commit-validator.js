#!/usr/bin/env node
const fs = require("fs");
const shell = require("shelljs");

const PATH_TO_COMMIT_MESSAGE = ".git/COMMIT_EDITMSG";
const commitMessage = fs.readFileSync(PATH_TO_COMMIT_MESSAGE, "utf8");
const VALID_TYPES = ["feat", "fix", "style", "test", "docs", "build", "chore", "ci", "perf", "refactor", "revert"];

function exitWithError(errorMessage) {
  // Colour codes: https://stackoverflow.com/a/41407246/1532919
  const bgRed = "\x1b[41m";
  const fontWhite = "\x1b[37m";
  const reset = "\x1b[0m";

  console.error(bgRed, fontWhite, "COMMIT VALIDATOR ERROR:", errorMessage, reset);
  process.exit(1);
}

/**
 * A valid format is like: "fix(MyComponent): this is what i did", and uses an approved "type"
 */
function isValidCommitMessage(commitMessage) {
  const type = commitMessage.substr(0, commitMessage.indexOf("("));
  return VALID_TYPES.indexOf(type) > -1 && !!commitMessage.match(/^\w*\(\w+\): .+/g);
}

/**
 * @returns string    The ticket ID, e.g. "ABC-1234"
 */
function getTicketIDFromBranchName() {
  const branchName = shell.exec("git branch --show-current", { silent: true }).stdout.replace("\n", "");
  const errorMessage = `Your branch name (${branchName}) must be formatted like: "abc-1234--some-description", where "abc-1234" is the JIRA ticket number.`;
  const parts = branchName.split("-");

  if (parts.length <= 1) {
    exitWithError(errorMessage);
  }

  const brigadeAbbrev = parts[0];
  if (brigadeAbbrev.length < 2 || brigadeAbbrev.length > 5) {
    exitWithError(errorMessage);
  }

  const ticketCounter = parts[1];
  if (ticketCounter.length < 2 || ticketCounter.length > 5) {
    exitWithError(errorMessage);
  }

  return `${brigadeAbbrev.toUpperCase()}-${ticketCounter}`;
}

function saveNewCommitMessage(newCommitMessage) {
  fs.writeFileSync(PATH_TO_COMMIT_MESSAGE, newCommitMessage, { encoding: "utf8", flag: "w" });
}

if (!isValidCommitMessage(commitMessage)) {
  exitWithError(
    `Your commit message must follow the "Conventional commits" format, eg: "fix(MyComponent): this is what i did".\nValid types are: ${VALID_TYPES.toString()}`
  );
}

const ticketID = getTicketIDFromBranchName();
const newCommitMessage = commitMessage.replace(/\)\:/i, `): ${ticketID}`);
saveNewCommitMessage(newCommitMessage);

process.exit(0);
