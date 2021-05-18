# @paprika/build-translations

## Description

Utility tool. Converting yml/yaml files to js files.

## Usage

### run from CLI

```
# Using yarn:
yarn global add @paprika/build-translations --dev
# Or via npx:
npx @paprika/build-translations <sourcePath> --out-dir <outPath> --yaml-file-ext yml
```

#### Options

| Option          | Required | Default              |
| --------------- | -------- | -------------------- |
| --out-dir       | false    | Same as <sourcePath> |
| --yaml-file-ext | false    | `yml`                |

### with node

```
yarn add @paprika/build-translations --dev
```

#### in your file

```js
import buildTranslations from "@paprika/build-translations";

buildTranslations({
  sourcePath: "./src/locale", // required
  outputPath: "./src/locale-js",
  yamlFileExtension: "yaml",
});
```
