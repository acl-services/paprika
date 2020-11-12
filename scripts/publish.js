const fs = require("fs");
const shell = require("shelljs");

const changedPackages = [];
const ALPHA_TAG = "-alpha";

(function findChanges() {
  shell.ls("packages").forEach(folder => {
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

shell.exec(`yarn lerna publish --force-publish=${changedPackages.join(",")}`);
