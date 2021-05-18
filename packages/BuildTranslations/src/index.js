import fs from "fs";
import path from "path";
import jsYaml from "js-yaml";

const buildPath = output => {
  return path.resolve(process.cwd(), output);
};

const removeTranslationFiles = outputPath => {
  fs.readdir(buildPath(outputPath), (err, files) => {
    if (err) {
      return console.error("Couldnt scan directory");
    }

    files.forEach(file => {
      if (file !== ".gitkeep") {
        fs.unlinkSync(buildPath(`${outputPath}/${file}`));
      }
    });
  });
};

export default function buildTranslations({ sourcePath, outputPath = sourcePath, yamlFileExtension = "yml" }) {
  console.log("🦁 Transfering L10n Locales");
  const isYamlFile = fileName => fileName.split(".")[1] === yamlFileExtension;
  const createTranslationFile = yamlFileName => {
    const outputFileName = yamlFileName.replace(`.${yamlFileExtension}`, ".js");
    const yamlAsJsonObject = jsYaml.load(
      fs.readFileSync(buildPath(`${sourcePath}/${yamlFileName}`), { encoding: "utf-8" })
    );
    const outputFileContents = `// Do not edit this file, it is automatically generated
    const locales = ${JSON.stringify(yamlAsJsonObject, null, 2)};
    export default locales;`;
    fs.writeFile(buildPath(`${outputPath}/${outputFileName}`), outputFileContents, () => {});
  };
  const generateTranslationFiles = () => {
    fs.readdir(buildPath(sourcePath), (err, yamlFiles) => {
      if (err) {
        console.log(err);
        console.error("Couldn't scan directory");
        process.exit(1);
      }

      yamlFiles.forEach(yamlFileName => {
        if (isYamlFile(yamlFileName)) {
          createTranslationFile(yamlFileName);
        }
      });
    });
  };

  try {
    removeTranslationFiles(outputPath);
    generateTranslationFiles();
  } catch (e) {
    console.error(e);
  }
}
