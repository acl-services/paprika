#!/usr/bin/env node

/**
 * Use this script to rename an existing Paprika package. This script:
 * - moves the files from the old directory to the new one
 * - renames those files to use the new component name
 * - updates the contents of the files to use the new component name
 *
 * Before running this script, first update these variables below:
 * - OLD_PKG_NAME
 * - NEW_PKG_NAME
 * - CONTENT_CHANGES
 *
 * Running this script:
 * ~/src/paprika$ node scripts/rename-package.js
 *
 * After running the script you still need to manually:
 * - update version in package.json
 * - update changelog.md
 * - make sure the new package works in storybook
 * - run yarn
 * - get merged and ensure it published to NPM
 *
 * Once the new package has been published to NPM:
 * - in ~/src/paprika/packages/newpackage/package.json:
 *   - change the version back to the old one
 *   - change the path back to the old one
 *   - prepend the description with `DEPRECATED -`
 * - change the readme.md to be `Moved to @paprika/newpackage`
 * - `~/src/paprika/packages/newpackage$ yarn publish` (when prompted, bump the version)
 *
 * Once the above has been published (two minutes):
 * - `~/src/paprika npm deprecate @paprika/oldpackage "Moved to @paprika/newpackage"`
 *
 * Additional steps:
 * - update the Paprika README badges
 * - update the Paprika Airtable page
 */

const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const LOGGING = true;

const OLD_PKG_NAME = "SidePanel";
const NEW_PKG_NAME = "Panel";
const CONTENT_CHANGES = [
  { old: OLD_PKG_NAME, new: NEW_PKG_NAME },
  { old: OLD_PKG_NAME.toLowerCase(), new: NEW_PKG_NAME.toLowerCase() },
  // ...
];

const MOVE_FROM = `packages/${OLD_PKG_NAME}`;
const MOVE_TO = `packages/${NEW_PKG_NAME}`;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

function logHeading(heading) {
  console.log(`\n### ${heading}`);
}

function log(msg) {
  if (LOGGING) {
    console.log(`...${msg}`);
  }
}

function moveEverything() {
  logHeading("moveEverything");

  function changeContentsOfFile(filePath) {
    let contents = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });

    CONTENT_CHANGES.forEach(contentChange => {
      contents = contents.replace(new RegExp(contentChange.old, "g"), contentChange.new);
    });

    fs.writeFileSync(filePath, contents);
  }

  function doIt(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(function x(fileOrDir) {
      if (fs.statSync(path.join(dir, fileOrDir)).isDirectory()) {
        const newDir = dir.replace(new RegExp(MOVE_FROM, "g"), MOVE_TO);

        switch (fileOrDir) {
          case "node_modules":
          case "lib":
            break;
          default:
            log(`mkdir ${newDir}/${fileOrDir}`);
            shell.exec(`mkdir ${newDir}/${fileOrDir}`);
            // recurse
            doIt(path.join(dir, fileOrDir));
            break;
        }
      } else {
        const oldPath = `${dir}/${fileOrDir}`;
        const newDir = dir.replace(new RegExp(MOVE_FROM, "g"), MOVE_TO);
        const newFile = fileOrDir.replace(new RegExp(OLD_PKG_NAME, "g"), NEW_PKG_NAME);
        const newPath = `${newDir}/${newFile}`;

        // cant do `git mv` as we are not beneath git... really?
        log(`mv ${oldPath} ${newPath}`);
        shell.exec(`mv ${oldPath} ${newPath}`);

        log("changing contents");
        changeContentsOfFile(newPath);
      }
    });
  }

  shell.exec(`mkdir ${MOVE_TO}`);
  doIt(MOVE_FROM);
}

function deleteSource() {
  if (OLD_PKG_NAME !== NEW_PKG_NAME) {
    logHeading("deleteSource");
    shell.exec(`rm -rf ${MOVE_FROM}`);
  }
}

function updateReadmeAndTypeDefinitions() {
  logHeading("updateReadmeAndTypeDefinitions");
  shell.exec(`yarn prepare`);
}

function updateStorybookPaths() {
  logHeading("updateStorybookPaths");

  const storyTreePath = ".storybook/storyTree.js";
  let contents = fs.readFileSync(storyTreePath, {
    encoding: "utf8",
    flag: "r",
  });

  CONTENT_CHANGES.forEach(textChange => {
    contents = contents.replace(new RegExp(textChange.old, "g"), textChange.new);
  });
  fs.writeFileSync(storyTreePath, contents);
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

moveEverything();
deleteSource();
updateReadmeAndTypeDefinitions();
updateStorybookPaths();
logHeading("DONE!!!!!!");
