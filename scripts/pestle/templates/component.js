module.exports = {
  packageJson (view) {
    const { componentName, componentDescription } = view;
    return `
{
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
  },
  "peerDependencies": {
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "styled-components": "^4.2.0"
  }
}
`;
  },
  index (view) {
    const { componentName } = view;
    return `
export { default } from "./${componentName}";
`;
  },
  component (view) {
  const { componentName } = view;
  return `
import React from "react";
import PropTypes from "prop-types";
import * as sc from "./${componentName}.styles";

function ${componentName}(props) {
  // todo
}; 

const propTypes = {
  // todo
};

const defaultProps = {
  // todo
};

${componentName}.displayName = "${componentName}";
${componentName}.propTypes = propTypes;
${componentName}.defaultProps = defaultProps;

export default ${componentName};  
`;
  },
  styles (view) {
    const { componentName } = view;
    return `

`;
  }
}