import { parse, builtinResolvers } from "react-docgen";

const { FindAllDefinitionsResolver } = builtinResolvers;

function hasTypes(str) {
  return /^types\./.test(str);
}

function applyTypesHandler(doc) {
  if (!doc.displayName || !doc.props) return doc;

  const componentName = doc.displayName.split(".")[0];

  for (const [, value] of Object.entries(doc.props)) {
    let newValue;

    if (value.type && value.type.name === "enum" && Array.isArray(value.type.value)) {
      newValue = value.type.value.map((propValue) => {
        if (hasTypes(propValue.value)) {
          return { ...propValue, value: `${componentName}.${propValue.value}` };
        }
        return { ...propValue };
      });
    }

    if (value.defaultValue && hasTypes(value.defaultValue.value)) {
      value.type = { ...value.type, value: newValue };
      value.defaultValue = {
        computed: value.defaultValue.computed,
        value: `${componentName}.${value.defaultValue.value}`,
      };
    }
  }

  return doc;
}

export default function parseFileToReactDoc(file, fileName) {
  const results = parse(file, {
    resolver: new FindAllDefinitionsResolver(),
    filename: fileName,
    babelOptions: {
      configFile: false,
      babelrc: false,
      presets: ["@babel/preset-react"],
    },
  });

  return results.map(applyTypesHandler);
}
