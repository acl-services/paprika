// eslint-disable-next-line import/no-extraneous-dependencies
const reactDocs = require("react-docgen");

function hasTypes(str) {
  return /^types\./.test(str);
}

function typesHandler(documentation) {
  const componentName = documentation._data.get("displayName").split(".")[0];

  documentation._props.forEach((value, key) => {
    let newValue;

    if (value.type && value.type.name === "enum") {
      newValue = value.type.value.map(propValue => {
        if (hasTypes(propValue.value)) {
          return { ...propValue, value: `${componentName}.${propValue.value}` };
        }
        return { ...propValue };
      });
    }

    if (value.defaultValue && hasTypes(value.defaultValue.value)) {
      documentation._props.set(key, {
        ...value,
        type: {
          ...value.type,
          value: newValue,
        },
        defaultValue: {
          computed: value.defaultValue.computed,
          value: `${componentName}.${value.defaultValue.value}`,
        },
      });
    }
  });
}

module.exports = file => {
  return reactDocs.parse(file, reactDocs.resolver.findAllComponentDefinitions, [
    ...reactDocs.defaultHandlers,
    typesHandler,
  ]);
};
