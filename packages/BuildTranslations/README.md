# @paprika/build-translations

## Description

Utility tool. Converting yml/yaml files to js files.

## Usage

### run from CLI

```
# Using yarn:
yarn global add @paprika/build-translations --dev
build-translations <sourcePath> --out-dir <outPath> --yaml-file-ext yml
# Or via npx:
npx @paprika/build-translations <sourcePath> --out-dir <outPath> --yaml-file-ext yml
```

#### Options

`<sourcePath>` will be default to current path.

| Option          | Required | Default                |
| --------------- | -------- | ---------------------- |
| --out-dir       | false    | Same as `<sourcePath>` |
| --yaml-file-ext | false    | `yml`                  |

### with node

```
yarn add @paprika/build-translations --dev
```

#### in your file

```js
import buildTranslations from "@paprika/build-translations";

// default values are same with running from CLI
buildTranslations({
  sourcePath: "./src/locale",
  outputPath: "./src/locale-js",
  yamlFileExtension: "yaml",
});
```

## Notes

There's no tests for this tool yet, we were going to add some, but it's unpossible to mock `process.cwd()` in jest, see [facebook/jest#5146](https://github.com/facebook/jest/issues/5146).
