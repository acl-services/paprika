#!/usr/bin/env node
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["commits"] }] */
const fs = require("fs");
const child_process = require("child_process");
const tree = require("../.storybook/storyTree");

class PaprikaStatus {
  constructor() {
    this.PATH_TO_COMPONENTS = "./packages/";
    this.LOCAL_HOST = "http://localhost:9009/";

    this.version = "package.json";
    this.jestSummary = "coverage/coverage-summary.json";
    this.statuses = JSON.parse(fs.existsSync("./status.json") && fs.readFileSync("./status.json", "utf8")) || {};
  }

  getStorybookA11yReport(subDir, commits) {
    try {
      const result = child_process.spawnSync(
        `yarn`,
        [`storybook-a11y-report`, `--storybookUrl ${this.LOCAL_HOST}`, `--include '${tree.getStoryName(subDir)}/**'`],
        { shell: true, timeout: 0 }
      );
      commits.a11yReport = this.parseA11y(result.stdout.toString());
    } catch (e) {
      console.log(e);
    }
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
      this.getStorybookA11yReport(subDir, commits);
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
    fs.writeFileSync("./status.json", JSON.stringify(this.statuses));
  }

  parseA11y(report) {
    const foundIssues = {};
    let curId;
    report.split("\n").forEach(line => {
      if (!line.includes("A11y ID: ") && !line.includes("description: ")) {
        return;
      }
      if (line.includes("A11y ID: ")) {
        curId = line.split("A11y ID: ")[1];
        if (foundIssues[curId]) {
          return;
        }
      }
      if (line.includes("description: ")) {
        foundIssues[curId] = line.split("description: ")[1];
      }
    });
    return Object.keys(foundIssues).map(a11yId => ({
      A11yID: a11yId,
      description: foundIssues[a11yId],
    }));
  }

  run() {
    // TODO: add statistics on Screener tests
    this.getPaprikaStatuses();
    process.exit(0);
  }
}

const PS = new PaprikaStatus();
PS.run();
