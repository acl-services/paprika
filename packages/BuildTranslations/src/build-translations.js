#!/usr/bin/env node

require("@babel/register")({
  extends: require.resolve("../../../babel.config.js"),
  only: [__dirname],
});
require("./cli").cli(process.argv);
