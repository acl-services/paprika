const buildTranslations = require("./index");

function parseArgumentsIntoOptions(rawArgs) {
  const argv = rawArgs.slice(2);
  let sourcePath = null;
  let outputPath = null;
  let yamlFileExtension = null;

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out-dir") { outputPath = argv[++i]; }
    else if (argv[i] === "--yaml-file-ext") { yamlFileExtension = argv[++i]; }
    else if (!argv[i].startsWith("--")) { sourcePath = argv[i]; }
  }

  return { sourcePath, outputPath, ...(yamlFileExtension && { yamlFileExtension }) };
}

async function cli(args) {
  const options = parseArgumentsIntoOptions(args);

  console.log("Transfering L10n Locales");
  await buildTranslations(options);
  console.log("locales have been processed");
}

module.exports = { cli };
