#!/usr/bin/env node

/**
 * `--openssl-legacy-provider` only exists on Node >=17 (added for the OpenSSL 3.x
 * migration). Passing it via NODE_OPTIONS on older Node (e.g. the CodeBuild image,
 * still on Node 14 pending RCP-43411) makes node exit immediately with code 9
 * ("invalid argument") before webpack even starts. Only set the flag when the
 * running Node version actually supports it.
 */
const { spawnSync } = require("child_process");
const path = require("path");

const [binaryName, ...extraArgs] = process.argv.slice(2);

if (!binaryName) {
  console.error("Usage: node scripts/runStorybook.js <start-storybook|build-storybook> [...args]");
  process.exit(1);
}

const [major] = process.versions.node.split(".").map(Number);
const supportsLegacyOpenssl = major >= 17;

const env = { ...process.env };
if (supportsLegacyOpenssl) {
  env.NODE_OPTIONS = [env.NODE_OPTIONS, "--openssl-legacy-provider"].filter(Boolean).join(" ");
}

const binaryPath = path.join(__dirname, "..", "node_modules", ".bin", binaryName);
const result = spawnSync(binaryPath, extraArgs, { stdio: "inherit", env });

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
