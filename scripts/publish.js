const shell = require("shelljs");

shell.exec(`yarn lerna publish --force-publish`);
