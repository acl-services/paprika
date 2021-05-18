import arg from "arg";
import buildTranslations from "./index";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--out-dir": String,
      "--yaml-file-ext": String,
    },
    {
      argv: rawArgs,
    }
  );

  const sourcePath = args._[2];

  return {
    sourcePath,
    outputPath: args["--out-dir"] || sourcePath,
    yamlFileExtension: args["--yaml-file-ext"] || "yml",
  };
}

export async function cli(args) {
  const options = parseArgumentsIntoOptions(args);
  await buildTranslations(options);
}
