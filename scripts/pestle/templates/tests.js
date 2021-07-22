module.exports = {
  spec(view) {
    const { componentName } = view;
    return `
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import ${componentName} from "../../src/${componentName}";

function renderComponent(props = {}) {
  const defaultProps = {
  };
  return render(<${componentName} {...defaultProps} {...props} />);
}

describe("TEST_SUITE", () => {
  it("TEST_CASE", () => {
    // todo
  });
});
`;
  },
  cypress(view) {
    const { componentName } = view;
    return `
import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

const storyPrefix = \`\${getStoryUrlPrefix("${componentName}")}\`;

describe("TEST_SUITE", () => {

  beforeEach(() => {
    cy.visitStorybook(\`\${storyPrefix}-todo-name\`);
  });

  it("TEST_CASE", () => {
    // todo
  });
});
`;
  }
};
