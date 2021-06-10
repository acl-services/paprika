#!/usr/bin/env node

// eslint-disable-next-line no-global-assign
require = require("esm")(module);
require("./cli").cli(process.argv);
