const fs = require("fs");
const shelljs = require("shelljs");
const { spawn } = require("child_process");

const changedPackages = [];
const ALPHA_TAG = "-alpha";

(function findChanges() {
  shelljs.ls("packages").forEach(folder => {
    const path = `./packages/${folder}`;

    try {
      const { name, version } = JSON.parse(fs.readFileSync(`${path}/package.json`, "utf8"));

      if (version.includes(ALPHA_TAG)) {
        changedPackages.push(name);
      }
    } catch (e) {
      console.warn(e);
    }
  });
})();

if (changedPackages.length === 0) {
  console.warn("No changes to publish.");
  return;
}

spawn("sh", ["-c", `yarn lerna publish --force-publish=${changedPackages.join(",")}`], {
  stdio: "inherit",
});
