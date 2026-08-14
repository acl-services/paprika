const { exec } = require("child_process");
const { readdirSync, statSync, copyFileSync, existsSync, mkdirSync } = require("fs");
const { join, relative } = require("path");
const os = require("os");
const pMap = require("p-map");

const isEsm = process.argv.includes("--esm");
const swc = join(__dirname, "..", "node_modules", ".bin", "swc");

const esmScope = new Set([
  "ActionBar",
  "Avatar",
  "Calendar",
  "CollapsibleCard",
  "DataGrid",
  "Filter",
  "FormElement",
  "Guard",
  "helpers",
  "Icon",
  "ListBoxWithTags",
  "MockEndpoints",
  "Modal",
  "seducer",
  "Stylers",
  "Table",
]);

const packagesDir = join(__dirname, "..", "packages");
const configFile = join(__dirname, "..", isEsm ? ".swcrc.esm" : ".swcrc");
const outDir = isEsm ? "lib/esm" : "lib";

const packages = readdirSync(packagesDir).filter(name => {
  const srcDir = join(packagesDir, name, "src");
  try {
    return statSync(srcDir).isDirectory();
  } catch {
    return false;
  }
});

const targets = isEsm ? packages.filter(p => esmScope.has(p)) : packages;

function transpile(pkg, { retryOnCrash = true } = {}) {
  const cwd = join(packagesDir, pkg);
  return new Promise((resolve, reject) => {
    exec(
      `"${swc}" src -d ${outDir} --strip-leading-paths --source-maps --copy-files --extensions .js,.jsx,.ts,.tsx --config-file "${configFile}"`,
      { cwd },
      (err, stdout, stderr) => {
        if (err) {
          // A signal (or the shell's 128 + signal exit code) means swc crashed rather
          // than rejecting the sources — the wasm plugin cache is the usual culprit.
          // One retry runs against a cache somebody else has finished populating.
          if (retryOnCrash && (err.signal || err.code >= 128)) {
            process.stderr.write(`[${pkg}] swc crashed (${err.signal || err.code}), retrying\n`);
            resolve(transpile(pkg, { retryOnCrash: false }));
            return;
          }
          process.stderr.write(`[${pkg}] ${stderr}`);
          reject(err);
        } else {
          process.stdout.write(stdout);
          resolve();
        }
      }
    );
  });
}

function copyDtsFiles(pkg) {
  const srcDir = join(packagesDir, pkg, "src");
  const libDir = join(packagesDir, pkg, outDir);
  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith(".d.ts")) {
        const rel = relative(srcDir, full);
        const dest = join(libDir, rel);
        const destDir = join(dest, "..");
        if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
        copyFileSync(full, dest);
      }
    }
  }
  walk(srcDir);
}

// The styled-components transform is a wasm plugin that swc compiles once and then
// memory-maps out of jsc.experimental.cacheRoot. Populating that cache from several
// processes at once rewrites the file while the others have it mapped, and they die
// with SIGBUS ("Bus error (core dumped)"). Transpile the first package on its own so
// every parallel process below only ever reads a warm cache.
const [warmup, ...rest] = targets;

Promise.resolve(warmup && transpile(warmup))
  .then(() => pMap(rest, transpile, { concurrency: os.cpus().length }))
  .then(() => {
    targets.forEach(copyDtsFiles);
  })
  .catch(() => {
    process.exitCode = 1;
  });
