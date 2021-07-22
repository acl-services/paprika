module.exports = {
  renderTemplate(view) {
    const { componentName } = view;
    return `
import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import { withKnobs } from "@storybook/addon-knobs";

const storyName = getStoryName("${componentName}");

// todo
storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", SHOWCASE_COMPONENT);

// todo
storiesOf(\`\${storyName}/Examples\`, module)
  .add("STORY_NAME", STORY_COMPONENT)
`;
  },
  Showcase(view) {
    const { componentName } = view;
    return `
import React from "react";
import CodeViewer from "storybook/components/CodeViewer";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import ${componentName} from "../../src";

const getKnobs = () => ({
  // todo
});

export default function Showcase() {
  const { children, ...${componentName}Props } = getKnobs();

  return (
    <CodeViewer>
      <${componentName} {...${componentName}Props}>{children}</${componentName}>
    </CodeViewer>
  );
}
`;
  },
  Example(view) {
    const { componentName, storyName } = view;
    return `
import React from "react";
import ${componentName} from "../../src";

export default function ${storyName}() {
  return (
    // todo
  );
}
`;
  },
  Screener(view) {
    const { componentName } = view;
    return `
import React from "react";
import ${componentName} from "../../src";
`;
  }
};
