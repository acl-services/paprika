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
 * ~src/paprika$ node rename-package.js
 *
 * After running it you still need to manually:
 * - update version in package.json
 * - make sure the new package works in storybook
 * - run the npm command to deprecate the old package (once the new one is merged and deployed)
 * - update the Paprika README badges
 * - update the Paprika Airtable page
 */

const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const LOGGING = true;

const OLD_PKG_NAME = "ListBox";
const NEW_PKG_NAME = "ListBox";
const CONTENT_CHANGES = [
  // { old: OLD_PKG_NAME, new: NEW_PKG_NAME },
  { old: "Listbox", new: "ListBox" },
  { old: "listbox", new: "list-box" },
];

// const IS_CHANGING_CAPITALIZATION =
//   OLD_PKG_NAME !== NEW_PKG_NAME && OLD_PKG_NAME.toLowerCase() === NEW_PKG_NAME.toLowerCase();
// const TEMP_PATH_PREFIX = "caps-";
const MOVE_FROM = `packages/${OLD_PKG_NAME}`;
// const MOVE_TO = IS_CHANGING_CAPITALIZATION ? `packages/${TEMP_PATH_PREFIX}${NEW_PKG_NAME}` : `packages/${NEW_PKG_NAME}`;
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

    CONTENT_CHANGES.forEach(textChange => {
      contents = contents.replace(new RegExp(textChange.old, "g"), textChange.new);
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

// function fixCapitalizedPathName() {
//   if (IS_CHANGING_CAPITALIZATION) {
//     logHeading("fixCapitalizedPathName");
//     const realFinalPath = MOVE_TO.replace(TEMP_PATH_PREFIX, "");
//     log(`mv ${MOVE_TO} ${realFinalPath}`);
//     shell.exec(`mv ${MOVE_TO} ${realFinalPath}`);
//   }
// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

moveEverything();
// fixCapitalizedPathName();
deleteSource();
updateReadmeAndTypeDefinitions();
updateStorybookPaths();
logHeading("DONE!!!!!!");
