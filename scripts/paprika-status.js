#!/usr/bin/env node
const fs = require("fs");
const shell = require("shelljs");
const parser = require('xml2json');

class PaprikaStatus {
  constructor() {
    this.PATH_TO_COMPONENTS = "./packages/";
    this.VALID_TYPES = ["feat", "fix", "style", "test", "docs", "build", "chore", "ci", "perf", "refactor", "revert"];

    this.gitOutput = "output_git.json";
    this.statuses = {};
  }


  getCommits() {
      // https://stackoverflow.com/questions/6327276/parsing-git-log-output-preferably-as-xml
    const log = `git log -n 5 --invert-grep --author='Paprika Semaphore 2.0' --pretty=format:"<entry><commit_hash>%h</commit_hash><author>%an</author><commit_date>%cd</commit_date><message_subject>%s</message_subject></entry>" -- . > ${this.gitOutput}`;
    
    shell.exec(`for d in ${this.PATH_TO_COMPONENTS}* ; do (cd "$d" && ${log}); done`);
    
    fs.readdirSync(this.PATH_TO_COMPONENTS).forEach(subDir => {
        console.log(subDir)
        shell.exec(`git rev-list --count master -- ${this.PATH_TO_COMPONENTS + subDir} > ${this.PATH_TO_COMPONENTS + subDir}/count_commits.json`);
        const commits = {};
        try {
            commits.logs = parser.toJson(`<root>${fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/${this.gitOutput}`, 'utf8')  }</root>`);
            commits.count =  parseInt(fs.readFileSync(`${this.PATH_TO_COMPONENTS + subDir}/count_commits.json`, 'utf8').toString(), 10);
            this.statuses[subDir] = commits;

            
        } catch (e) {
            this.statuses[subDir] = "Error parsing commit messages"
        }
      });

    shell.exec(`for d in ${this.PATH_TO_COMPONENTS}* ; do (cd "$d" && rm ${this.gitOutput} && rm count_commits.json); done`);
    
  }

  run() {
    this.getCommits()
    console.log(this.statuses);
    process.exit(0);
  }
}

const CV = new PaprikaStatus();
CV.run();
