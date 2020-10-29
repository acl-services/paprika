#!/usr/bin/env node
const fs = require("fs");
const shell = require("shelljs");

class CommitValidator {
  constructor() {
    this.PATH_TO_COMMIT_MESSAGE = ".git/COMMIT_EDITMSG";
    this.VALID_TYPES = ["feat", "fix", "style", "test", "docs", "build", "chore", "ci", "perf", "refactor", "revert"];
    this.branchName = ""; // eg: abc-1234--some-description
    this.pillarAbbreviation = ""; // eg: "abc"
    this.ticketCounter = ""; // eg: 1234
    this.ticketId = ""; // eg: abc-1234
    this.commitMessage = "";
  }

  exitWithError(errorMessage) {
    // Colour codes: https://stackoverflow.com/a/41407246/1532919
    const bgRed = "\x1b[41m";
    const fontWhite = "\x1b[37m";
    const reset = "\x1b[0m";

    console.error(bgRed, fontWhite, "COMMIT VALIDATOR ERROR:", errorMessage, reset);
    process.exit(1);
  }

  validateAndGetBranchName() {
    const branchName = shell.exec("git branch --show-current", { silent: true }).stdout.replace("\n", "");
    if (branchName === "") {
      this.exitWithError(
        "Your branch name was not detected. Please ensure you have git version 2.22 or greater (git --version)."
      );
    }

    return branchName;
  }

  getPillarAbbreviationFromBranchName() {
    return this.branchName.split("-")[0];
  }

  validateAndGetTicketCounterFromBranchName() {
    const ticketCounter = this.branchName.split("-")[1];

    if (!ticketCounter) {
      this.exitWithError(
        `A valid JIRA ticket ID was not found in your branch name (${this.branchName}). Please name your branch following the pattern 'abc-1234--some-description' and try again.`
      );
    }

    return ticketCounter;
  }

  getAndValidateCommitMessage() {
    const STANDARD_ERROR =
      'Your commit message must follow the "Conventional commits" format, eg: "fix(AffectedComponent): this is what i did"';
    const commitMessage = fs.readFileSync(this.PATH_TO_COMMIT_MESSAGE, "utf8");
    const type = commitMessage.substr(0, commitMessage.indexOf("("));

    if (this.VALID_TYPES.indexOf(type) === -1) {
      this.exitWithError(
        `${STANDARD_ERROR}\nYour commit message has an invalid type (${type}). Please use one of the supported types: ${this.VALID_TYPES.toString()}`
      );
    }

    if (!commitMessage.match(/^\w*\([\w,\s]+\): .+/g)) {
      this.exitWithError(STANDARD_ERROR);
    }

    return commitMessage;
  }

  updateCommitMessage() {
    const commitMessageContainsTicketId = this.commitMessage.toUpperCase().indexOf(this.ticketId.toUpperCase()) > -1;

    const newCommitMessage = commitMessageContainsTicketId
      ? this.commitMessage
      : this.commitMessage.replace(/\):/i, `): ${this.ticketId}`);

    fs.writeFileSync(this.PATH_TO_COMMIT_MESSAGE, newCommitMessage, { encoding: "utf8", flag: "w" });
  }

  run() {
    this.branchName = this.validateAndGetBranchName();
    this.pillarAbbreviation = this.getPillarAbbreviationFromBranchName();
    this.ticketCounter = this.validateAndGetTicketCounterFromBranchName();
    this.ticketId = `${this.pillarAbbreviation.toUpperCase()}-${this.ticketCounter}`;
    this.commitMessage = this.getAndValidateCommitMessage();
    this.updateCommitMessage();
    process.exit(0);
  }
}

const CV = new CommitValidator();
CV.run();
