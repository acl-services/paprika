#!/usr/bin/env node
// --max-old-space-size=8192
const fs = require("fs");
const child_process = require('child_process');
const tree = require("../.storybook/storyTree")

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
    this.statuses = JSON.parse(fs.existsSync("./status.json") && fs.readFileSync("./status.json", "utf8")) || {};
  }

  getStorybookA11yReport(subDir) {
    try {
      child_process.spawnSync(`yarn`, [`storybook-a11y-report`, `--storybookUrl ${this.LOCAL_HOST}`, `--include '${tree.getStoryName(subDir)}/**'`, `--outDir ${this.PATH_TO_COMPONENTS + subDir}`], {shell: true, timeout: 60000});
    } catch (e) {
      console.log(e);
    }
  }

  getCommitPrefixCounts(subDir) {
    child_process.execSync(`git rev-list --count master --grep="fix(" --count -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/${this.bugCountOutput}`);
    child_process.execSync(`git rev-list --count master --grep="chore(" --count -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/${this.choreCount}`);
    child_process.execSync(`git rev-list --count master --grep="feat(" --count -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/${this.featCount}`);
  }

  getPaprikaStatuses() {
    const log = `git log --invert-grep --author='Paprika Semaphore 2.0' -n 1 -- . > ${this.gitOutput}`;
    const lineCount = `git ls-files | xargs cat | wc -l > ${this.lineCount}`;
    fs.readdirSync(this.PATH_TO_COMPONENTS).forEach(subDir => {
      child_process.execSync(`cd ${this.PATH_TO_COMPONENTS + subDir} && ${log} && ${lineCount}`);
      child_process.execSync(`git rev-list --count master -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/${this.countCommits}`);
      this.getCommitPrefixCounts(subDir);
      this.getStorybookA11yReport(subDir);
      const commits = {};
      try {
        // clone the repo then run yarn in sonar
        // get number task by ticket
          commits.logs = fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.gitOutput}`, 'utf8');
          commits.commitCount =  parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.countCommits}`, 'utf8').toString(), 10);
          commits.bugCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.bugCountOutput}`, 'utf8').toString(), 10);
          commits.choreCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.choreCount}`, 'utf8').toString(), 10);
          commits.featCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.featCount}`, 'utf8').toString(), 10);
          commits.lineCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.lineCount}`, 'utf8').toString(), 10);
          commits.a11yReport= this.parseA11y(`${this.PATH_TO_COMPONENTS + subDir}/${this.a11yReport}`);
          this.statuses[subDir] = commits;
          console.log(this.statuses[subDir]);

      } catch (e) {
          this.statuses[subDir] = e;
      }
      fs.writeFileSync("./status.json", JSON.stringify(this.statuses));
      child_process.execSync(`cd ${this.PATH_TO_COMPONENTS + subDir} && rm -f ${this.gitOutput} && rm -f ${this.countCommits} && rm -f ${this.bugCountOutput} && rm -f ${this.choreCount} && rm -f ${this.featCount} && rm -f ${this.lineCount} && rm -f ${this.a11yReport}`);
      });
  }

  parseA11y(path){
    let report;
    try {
      report = fs.readFileSync(path, "utf8");
    }
    catch(e) {
      return [];
    }
    const output = [];
    const cur = {};
    report.split("\n").forEach((line) => {
        if (line.includes("A11y ID:")) {
            if (Object.keys(cur).length > 0) output.push(Object.assign({}, cur));
            cur.A11yID = line;
        }
        if (line.includes("description:")) {
            cur.description = line;
        }
    });
    return output;
  }

  run() {
    this.getPaprikaStatuses()
    // JSON.stringify what's in the status.json; then JSON.parse
    // console.log(this.statuses);
    process.exit(0);
  }
}

const PS = new PaprikaStatus();
PS.run();
