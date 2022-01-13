function renderPackageJSONTemplate(view) {
  const { componentName, componentDescription } = view;
  return `{
  "name": "@paprika/${componentName.toLowerCase()}",
  "version": "1.0.0",
  "description": "${componentDescription}",
  "author": "@paprika",
  "license": "MIT",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://github.com/acl-services/paprika.git",
    "directory": "packages/${componentName}"
  },
  "publishConfig": {
    "access": "public"
  },
  "dependencies": {
    "@babel/runtime-corejs2": "^7.3.1",
    "@paprika/stylers": "^1.0.0",
    "@paprika/tokens": "^1.0.0",
    "class-names": "^1.0.0",
    "classnames": "^2.2.6",
    "prop-types": "^15.7.2"
  },
  "peerDependencies": {
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "styled-components": "^4.2.0"
  }
}
`;
}

function renderIndexTemplate(view) {
  const { componentName } = view;
  return `export { default } from "./${componentName}";
`;
}

function renderComponentTemplate(view) {
  const { componentName } = view;
  return `import React from "react";
import PropTypes from "prop-types";
import * as sc from "./${componentName}.styles";

function ${componentName}(props) {
  return (
    <>
      (STUB) Your component goes here!
    </>
  );
}; 

const propTypes = {};

const defaultProps = {};

${componentName}.displayName = "${componentName}";
${componentName}.propTypes = propTypes;
${componentName}.defaultProps = defaultProps;

export default ${componentName};  
`;
}

function renderComponentStylesTemplate() {
  return `// import styled from "styled-components";
// import tokens from "@paprika/tokens";
// import stylers from "@paprika/stylers";
`;
}

function renderReadMeTemplate() {
  return "<!-- content --><!-- eoContent -->";
}

module.exports = {
  renderPackageJSONTemplate,
  renderIndexTemplate,
  renderComponentTemplate,
  renderComponentStylesTemplate,
  renderReadMeTemplate,
};
