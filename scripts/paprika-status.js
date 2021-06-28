#!/usr/bin/env node --max-old-space-size=8192
/* eslint-disable import/no-extraneous-dependencies */
const fs = require("fs");
const exec = require("child_process").execSync;
const tree = require("../.storybook/storyTree")

class PaprikaStatus {
  constructor() {
    this.PATH_TO_COMPONENTS = "./packages/";
    this.VALID_TYPES = ["feat", "fix", "style", "test", "docs", "build", "chore", "ci", "perf", "refactor", "revert"];

    this.gitOutput = "output_git.xml";
    this.lineCount = "line_count.json";
    this.bugCountOutput = "bug_count.json";
    this.choreCount = "chore_count.json";
    this.featCount = "feat_count.json";
    this.a11yReport = "a11y_report.txt";
    this.statuses = {};
  }


  getCommits() {
    // https://stackoverflow.com/questions/6327276/parsing-git-log-output-preferably-as-xml
    const log = `git log --invert-grep --author='Paprika Semaphore 2.0' -n 1 -- . > ${this.gitOutput}`;
    const lineCount = `git ls-files | xargs cat | wc -l > ${this.lineCount}`;
    exec(`for d in ${this.PATH_TO_COMPONENTS}* ; do (cd "$d" && ${log} && ${lineCount}); done`);
    fs.readdirSync(this.PATH_TO_COMPONENTS).forEach(subDir => {
        console.log(subDir)
        exec(`git rev-list --count master -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/count_commits.json`);
        exec(`git rev-list --all --grep="fix(" --count -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/${this.bugCountOutput}`);
        exec(`git rev-list --all --grep="chore(" --count -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/${this.choreCount}`);
        exec(`git rev-list --all --grep="feat(" --count -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/${this.featCount}`);
        try {
          exec(`yarn storybook-a11y-report --storybookUrl http://localhost:9009/ --include '${tree.getStoryName(subDir)}/**' > ${this.PATH_TO_COMPONENTS + subDir}/${this.a11yReport}`);
        } catch (e) {
          console.log(e);
        }
        const commits = {};
        try {
            commits.logs = fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.gitOutput}`, 'utf8');
            commits.commitCount =  parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/count_commits.json`, 'utf8').toString(), 10);
            commits.bugCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.bugCountOutput}`, 'utf8').toString(), 10);
            commits.choreCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.choreCount}`, 'utf8').toString(), 10);
            commits.featCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.featCount}`, 'utf8').toString(), 10);
            commits.lineCount = parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.lineCount}`, 'utf8').toString(), 10);
            commits.a11yReport= this.parseA11y(`${this.PATH_TO_COMPONENTS + subDir}/${this.a11yReport}`);
            this.statuses[subDir] = commits;

            
        } catch (e) {
            this.statuses[subDir] = "Error parsing commit messages"
        }
        fs.writeFileSync("./status.json", JSON.stringify(this.statuses));
      });

     // exec(`for d in ${this.PATH_TO_COMPONENTS}* ; do (cd "$d" && rm ${this.gitOutput} && rm count_commits.json && rm ${this.bugCountOutput} && rm ${this.choreCount} && rm ${this.featCount} && rm ${this.lineCount} && rm ${this.a11yReport}); done`);
    
  }

  parseA11y(path){
    const report = (fs.readFileSync(path, "utf8"));
    console.log(report)
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
        console.log(cur);
    });
    console.log(output)
    return output;
  }

  run() {
    this.getCommits()
    console.log(JSON.parse(JSON.stringify(this.statuses)));
    process.exit(0);
  }
}

const CV = new PaprikaStatus();
CV.run();
