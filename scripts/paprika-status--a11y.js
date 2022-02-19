#!/usr/bin/env node
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["commits"] }] */
const fs = require("fs");
const child_process = require("child_process");
const tree = require("../.storybook/storyTree");
const OUTPUT_FILE_PATH = "./status-a11y.json";

class PaprikaA11yStatus {
  constructor() {
    this.PATH_TO_COMPONENTS = "./packages/";
    this.LOCAL_HOST = "http://localhost:9009/";

    this.version = "package.json";
    this.statuses = JSON.parse(fs.existsSync(OUTPUT_FILE_PATH) && fs.readFileSync(OUTPUT_FILE_PATH, "utf8")) || {};
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

  getPaprikaA11yStatuses() {
    fs.readdirSync(this.PATH_TO_COMPONENTS).forEach(subDir => {
      const commits = {};

      // TODO: link story out of memory
      if (subDir !== "Link") {
        this.getStorybookA11yReport(subDir, commits);
      }
      try {
        this.statuses[subDir] = commits;
        console.log(subDir);
        console.log(this.statuses[subDir]);
      } catch (e) {
        this.statuses[subDir] = { error: e };
      }
    });
    child_process.execSync(`rm -f ./__report__/a11y_report.md`);
    fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(this.statuses));
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
    this.getPaprikaA11yStatuses();
    process.exit(0);
  }
}

const PS = new PaprikaA11yStatus();
PS.run();
