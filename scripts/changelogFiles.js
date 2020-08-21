#!/usr/bin/env node
const fs = require("fs");
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require("shelljs");

const FILE_NAME = "CHANGELOG.md";

shell.ls("packages").forEach(folder => {
  const path = `./packages/${folder}`;

  try {
    const originalChangelog = fs.readFileSync(`${path}/${FILE_NAME}`, "utf8");
    const newContentTester = /(?<=## \[Unreleased\]\n)(?:.*?)(?=\n## \[)/s;
    const newContent = originalChangelog.match(newContentTester);

    if (newContent && newContent[0]) {
      const { version } = JSON.parse(fs.readFileSync(`${path}/package.json`, "utf8"));
      const dateString = new Date()
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .match(/(\d{2})\/(\d{2})\/(\d{4})/);
      let newChangelog = originalChangelog.replace(newContentTester, "");

      newChangelog = `${newChangelog}## [${version}] - ${dateString[3]}-${dateString[1]}-${dateString[2]}\n${
        newContent[0]
      }`;

      fs.writeFileSync(`${path}/${FILE_NAME}`, newChangelog, { encoding: "utf8", flag: "w" });
    }
  } catch (e) {
    console.warn(e);
  }
});

shell.exec(`prettier "**/${FILE_NAME}" --write`);
