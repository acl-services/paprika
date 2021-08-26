#!/usr/bin/env node
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["commits"] }] */
const fs = require("fs");
const child_process = require("child_process");
const tree = require("../.storybook/storyTree");

class PaprikaStatus {
  constructor() {
    this.PATH_TO_COMPONENTS = "./packages/";
    this.LOCAL_HOST = "http://localhost:9009/";

    this.gitOutput = "output_git.xml";
    this.lineCount = "line_count.json";
    this.bugCountOutput = "bug_count.json";
    this.choreCount = "chore_count.json";
    this.featCount = "feat_count.json";
    this.a11yReport = "a11y_report.md";
    this.countCommits = "count_commits.json";
    this.version = "package.json";
    this.jestSummary = "coverage/coverage-summary.json";
    this.statuses = JSON.parse(fs.existsSync("./status.json") && fs.readFileSync("./status.json", "utf8")) || {};
  }

  getStorybookA11yReport(subDir, commits) {
    try {
      child_process.spawnSync(
        `yarn`,
        [
          `storybook-a11y-report`,
          `--storybookUrl ${this.LOCAL_HOST}`,
          `--include '${tree.getStoryName(subDir)}/**'`,
          `--outDir ${this.PATH_TO_COMPONENTS + subDir}`,
        ],
        { shell: true, timeout: 60000 }
      );
      commits.a11yReport = this.parseA11y(`${this.PATH_TO_COMPONENTS + subDir}/${this.a11yReport}`);
    } catch (e) {
      console.log(e);
    }
  }

  getCommitPrefixCounts(subDir, commits) {
    const path = this.PATH_TO_COMPONENTS + subDir;
    try {
      child_process.execSync(`git rev-list --count HEAD -- ${path} > ${path}/${this.countCommits}`);
      child_process.execSync(
        `git rev-list --count HEAD --grep="fix(" --count -- ${path} > ${path}/${this.bugCountOutput}`
      );
      child_process.execSync(
        `git rev-list --count HEAD --grep="chore(" --count -- ${path} > ${path}/${this.choreCount}`
      );
      child_process.execSync(`git rev-list --count HEAD --grep="feat(" --count -- ${path} > ${path}/${this.featCount}`);

      commits.commitCount = parseInt(fs.readFileSync(`${path}/${this.countCommits}`, "utf8").toString(), 10);
      commits.bugCount = parseInt(fs.readFileSync(`${path}/${this.bugCountOutput}`, "utf8").toString(), 10);
      commits.choreCount = parseInt(fs.readFileSync(`${path}/${this.choreCount}`, "utf8").toString(), 10);
      commits.featCount = parseInt(fs.readFileSync(`${path}/${this.featCount}`, "utf8").toString(), 10);
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
    const log = `git log --no-merges --invert-grep --author='Paprika Semaphore 2.0' -n 1 -- . > ${this.gitOutput}`;
    const lineCount = `git ls-files | xargs cat | wc -l > ${this.lineCount}`;
    fs.readdirSync(this.PATH_TO_COMPONENTS).forEach(subDir => {
      const commits = {};
      child_process.execSync(`cd ${this.PATH_TO_COMPONENTS + subDir} && ${log} && ${lineCount}`);
      this.getCommitPrefixCounts(subDir, commits);
      this.getStorybookA11yReport(subDir, commits);
      this.getTestStatistics(subDir, commits);
      try {
        commits.version = JSON.parse(
          fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.version}`, "utf8")
        ).version;
        commits.logs = fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.gitOutput}`, "utf8");
        commits.lineCount = parseInt(
          fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.lineCount}`, "utf8").toString(),
          10
        );
        this.statuses[subDir] = commits;
        console.log(subDir);
        console.log(this.statuses[subDir]);
      } catch (e) {
        this.statuses[subDir] = { error: e };
      }
      child_process.execSync(
        `cd ${this.PATH_TO_COMPONENTS + subDir} && rm -f ${this.gitOutput} && rm -f ${this.countCommits} && rm -f ${
          this.bugCountOutput
        } && rm -f ${this.choreCount} && rm -f ${this.featCount} && rm -f ${this.lineCount} && rm -f ${this.a11yReport}`
      );
      child_process.execSync(`rm -f ${this.jestSummary}`);
    });
    fs.writeFileSync("./status.json", JSON.stringify(this.statuses));
  }

  parseA11y(path) {
    let report;
    try {
      report = fs.readFileSync(path, "utf8");
    } catch (e) {
      return [];
    }
    const output = [];
    const cur = {};
    report.split("\n").forEach(line => {
      if (line.includes("A11y ID: ")) {
        if (Object.keys(cur).length > 0) output.push(Object.assign({}, cur));
        cur.A11yID = line.split("A11y ID: ")[1];
      }
      if (line.includes("description: ")) {
        cur.description = line.split("description: ")[1];
      }
    });
    return output;
  }

  run() {
    // TODO: add statistics on Screener tests
    this.getPaprikaStatuses();
    process.exit(0);
  }
}

const PS = new PaprikaStatus();
PS.run();
