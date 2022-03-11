#!/usr/bin/env node
const fs = require("fs");
const child_process = require("child_process");

const OUTPUT_FILE = "./status.json";
const PACKAGES_PATH = "./packages/";
const TEST_COVERAGE_SUMMARY = "coverage/coverage-summary.json";

const results = JSON.parse(fs.existsSync(OUTPUT_FILE) && fs.readFileSync(OUTPUT_FILE, "utf8")) || {};

function parseNumberResultFor(strCommand) {
  return parseInt(child_process.execSync(strCommand).toString(), 10);
}

function getTestStatistics(subDir) {
  try {
    const jestSummary = [];
    const output = child_process
      .execSync(
        `yarn jest --passWithNoTests --testPathPattern=${PACKAGES_PATH +
          subDir} --coverage --coverageReporters="json-summary" --detectOpenHandles --silent --forceExit`
      )
      .toString();
    if (output.toUpperCase().includes("NO TESTS FOUND")) return;

    for (const [key, value] of Object.entries(JSON.parse(fs.readFileSync(`${TEST_COVERAGE_SUMMARY}`, "utf8")))) {
      const endsWithRegex = new RegExp("^.*[js-ts-tsx]$");
      if (key.includes(`${subDir}/src`) && key.match(endsWithRegex)) {
        const testStatistic = {};
        testStatistic.testPath = key.substring(key.indexOf(subDir), key.length);
        testStatistic.coverage = value;
        jestSummary.push({ ...testStatistic });
      }
    }
    return jestSummary;
  } catch (e) {
    console.error(e);
  }
}

function getPaprikaStatuses() {
  // ignore merges and commits made by Paprika Bot
  const log = `git log --no-merges --invert-grep --author='Paprika Semaphore 2.0' -n 1 -- .`;
  const lineCount = `git ls-files | xargs cat | wc -l`;
  fs.readdirSync(PACKAGES_PATH).forEach(subDir => {
    console.log(`🔄 Processing ${subDir}`);

    const subDirPath = PACKAGES_PATH + subDir;
    const componentReport = {};

    componentReport.jestSummary = getTestStatistics(subDir);

    try {
      componentReport.commitCount = parseNumberResultFor(`git rev-list --count HEAD -- ${subDirPath}`);
      componentReport.bugCount = parseNumberResultFor(
        `git rev-list --count HEAD --grep="fix(" --count -- ${subDirPath}`
      );
      componentReport.choreCount = parseNumberResultFor(
        `git rev-list --count HEAD --grep="chore(" --count -- ${subDirPath}`
      );
      componentReport.featCount = parseNumberResultFor(
        `git rev-list --count HEAD --grep="feat(" --count -- ${subDirPath}`
      );
      componentReport.lineCount = parseNumberResultFor(`cd ${PACKAGES_PATH + subDir} && ${lineCount}`);

      componentReport.version = JSON.parse(fs.readFileSync(`${PACKAGES_PATH + subDir}/package.json`, "utf8")).version;
      componentReport.logs = child_process.execSync(`cd ${PACKAGES_PATH + subDir} && ${log}`).toString();
      results[subDir] = componentReport;
    } catch (e) {
      results[subDir] = { error: e };
    }
  });

  child_process.execSync(`rm -f ${TEST_COVERAGE_SUMMARY}`);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results));
}

getPaprikaStatuses();
process.exit(0);
