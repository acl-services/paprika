#!/usr/bin/env node

const fs = require("fs");
const child_process = require("child_process");

const tree = require("../../.storybook/storyTree");

const OUTPUT_FILE = "./status-a11y.json";
const PACKAGES_PATH = "./packages/";
const LOCAL_STORYBOOK_URL = "http://localhost:9009/";

function parseA11y(report) {
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

function getPaprikaA11yStatuses() {
  const results = JSON.parse(fs.existsSync(OUTPUT_FILE) && fs.readFileSync(OUTPUT_FILE, "utf8")) || {};

  fs.readdirSync(PACKAGES_PATH).forEach(subDir => {
    console.log(`🔄 Processing ${subDir}`);

    try {
      // TODO: some stories are still causing out of memory issue
      if (!["Panel"].includes(subDir)) {
        const strResult = child_process
          .spawnSync(
            `yarn`,
            [
              `storybook-a11y-report`,
              `--storybookUrl ${LOCAL_STORYBOOK_URL}`,
              `--include '${tree.getStoryName(subDir)}/**'`,
            ],
            { shell: true, timeout: 0 }
          )
          .stdout.toString();
        results[subDir] = { a11yReport: parseA11y(strResult) };
      }
    } catch (e) {
      results[subDir] = { error: e };
    }
  });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results));
  child_process.execSync(`rm -f ./__report__/a11y_report.md`);
}

getPaprikaA11yStatuses();
process.exit(0);
