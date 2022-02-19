#!/usr/bin/env node
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["commits"] }] */
const fs = require("fs");
const child_process = require("child_process");
const OUTPUT_FILE_PATH = "./status.json";

class PaprikaStatus {
  constructor() {
    this.PATH_TO_COMPONENTS = "./packages/";
    this.LOCAL_HOST = "http://localhost:9009/";

    this.version = "package.json";
    this.jestSummary = "coverage/coverage-summary.json";
    this.statuses = JSON.parse(fs.existsSync(OUTPUT_FILE_PATH) && fs.readFileSync(OUTPUT_FILE_PATH, "utf8")) || {};
  }

  getCommitPrefixCounts(subDir, commits) {
    const path = this.PATH_TO_COMPONENTS + subDir;
    try {
      const commitCount = child_process.execSync(`git rev-list --count HEAD -- ${path}`).toString();
      const bugCount = child_process.execSync(`git rev-list --count HEAD --grep="fix(" --count -- ${path}`).toString();
      const choreCount = child_process
        .execSync(`git rev-list --count HEAD --grep="chore(" --count -- ${path}`)
        .toString();
      const featCount = child_process
        .execSync(`git rev-list --count HEAD --grep="feat(" --count -- ${path}`)
        .toString();

      commits.commitCount = parseInt(commitCount, 10);
      commits.bugCount = parseInt(bugCount, 10);
      commits.choreCount = parseInt(choreCount, 10);
      commits.featCount = parseInt(featCount, 10);
    } catch (e) {
      console.log(e);
    }
  }

  getTestStatistics(subDir, commits) {
    try {
      const jestSummary = [];
      const output = child_process
        .execSync(
          `yarn jest --passWithNoTests --testPathPattern=${this.PATH_TO_COMPONENTS +
            subDir} --coverage --coverageReporters="json-summary" --forceExit`
        )
        .toString();
      if (output.toUpperCase().includes("NO TESTS FOUND")) return;

      for (const [key, value] of Object.entries(JSON.parse(fs.readFileSync(`${this.jestSummary}`, "utf8")))) {
        const endsWithRegex = new RegExp("^.*[js-ts-tsx]$");
        if (key.includes(`${subDir}/src`) && key.match(endsWithRegex)) {
          const testStatistic = {};
          testStatistic.testPath = key.substring(key.indexOf(subDir), key.length);
          testStatistic.coverage = value;
          jestSummary.push(Object.assign({}, testStatistic));
        }
      }
      commits.jestSummary = jestSummary;
    } catch (e) {
      console.log(e);
    }
  }

  getPaprikaStatuses() {
    // ignore merges and commits made by Paprika Bot
    const log = `git log --no-merges --invert-grep --author='Paprika Semaphore 2.0' -n 1 -- .`;
    const lineCount = `git ls-files | xargs cat | wc -l`;
    fs.readdirSync(this.PATH_TO_COMPONENTS).forEach(subDir => {
      const commits = {};
      this.getCommitPrefixCounts(subDir, commits);
      this.getTestStatistics(subDir, commits);
      try {
        commits.version = JSON.parse(
          fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.version}`, "utf8")
        ).version;
        commits.logs = child_process.execSync(`cd ${this.PATH_TO_COMPONENTS + subDir} && ${log}`).toString();
        commits.lineCount = parseInt(
          child_process.execSync(`cd ${this.PATH_TO_COMPONENTS + subDir} && ${lineCount}`).toString(),
          10
        );
        this.statuses[subDir] = commits;
        console.log(subDir);
        console.log(this.statuses[subDir]);
      } catch (e) {
        this.statuses[subDir] = { error: e };
      }
      child_process.execSync(`rm -f ${this.jestSummary}`);
    });
    fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(this.statuses));
  }

  run() {
    // TODO: add statistics on Screener tests
    this.getPaprikaStatuses();
    process.exit(0);
  }
}

const PS = new PaprikaStatus();
PS.run();
