interface Options {
  sourcePath: string;
  outputPath?: string;
  yamlFileExtension?: string;
}

declare function buildTranslations(options: Options): void;

export default buildTranslations;
