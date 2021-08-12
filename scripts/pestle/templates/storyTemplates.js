function renderStoryFolderTemplate(view) {
  const { componentName } = view;
  return `import React from "react";
  import { withKnobs } from "@storybook/addon-knobs";
  import { getStoryName } from "storybook/storyTree";
  import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
  import ExampleStory from "storybook/components/ExampleStory";
  import Showcase from "./examples/Showcase";

  const storyName = getStoryName("${componentName}");
  
  export default {
    title: storyName,
  };
  
  export const showcase = () => (
    <ExampleStory storyName="${componentName}" tagline={ExampleStory.defaultTaglines.showcase}>
      <Showcase />
    </ExampleStory>
  );
  showcase.story = {
    name: "Showcase",
    decorators: [withKnobs],
    parameters: showcaseStoryParameters,
  };
`;
}

function renderBackyardStoryFolderTemplate(view) {
  const { componentName } = view;
  return `import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ${componentName} from "../src/${componentName}";
import Screener from "./tests/Screener";

const storyName = getStoryName("${componentName}");

export default {
  title: \`\${storyName}/Backyard/Tests\`,
  component: ${componentName},
};

export const screener = () => <Screener />;
screener.story = { name: "Screener", parameters: testStoryParameters };
`;
}

function renderExampleStoryFolderTemplate(view) {
  const { componentName, storyName } = view;
  return `import React from "react";
  import { getStoryName } from "storybook/storyTree";
  import { exampleStoryParameters } from "storybook/assets/storyParameters";
  import ExampleStory from "storybook/components/ExampleStory";
  import ${componentName} from "../src/${componentName}";
  import ${storyName} from "./examples/${storyName}";
  
  const storyName = getStoryName("${componentName}");
  
  export default {
    title: \`\${storyName}/Examples\`,
    component: ${componentName},
  };
  
  export const ${storyName.toLowerCase()}Example = () => (
    <ExampleStory storyName="${storyName}" component="${componentName}" fileName="examples/${storyName}.js">
      <${storyName} />
    </ExampleStory>
  );
  ${storyName.toLowerCase()}Example.story = { name: "${storyName}", parameters: exampleStoryParameters };
`;
}

function renderExampleStoryTemplate(view) {
  const { componentName, storyName } = view;
  return `import React from "react";
import ${componentName} from "../../src";
// import { Story, CenteredStory, Rule, Big, Small, Tagline, Gap, repeat, breaklines, CodeHeading } from "storybook/assets/styles/common.styles";

export default function ${storyName}Example() {
  return (
    <${componentName} />
  );
}
`;
}

function renderVariationStoryTemplate(view) {
  const { componentName } = view;
  return `import React from "react";
import ${componentName} from "../../src";
// import StoryHeading from "storybook/components/StoryHeading";
// import { Story, CenteredStory, Rule, Big, Small, Tagline, Gap, repeat, breaklines, CodeHeading } from "storybook/assets/styles/common.styles";

export default function Variations() {
  return (
    <${componentName} />
  );
}
`;
}

function renderShowcaseStoryTemplate(view) {
  const { componentName } = view;
  return `import React from "react";
import CodeViewer from "storybook/components/CodeViewer";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import ${componentName} from "../../src";

const getKnobs = () => ({
  booleanKnob: boolean("boolean", false),
  numberKnob: number("number", 0),
  textKnob: text("text"),
  selectKnob: select("select", [1, 2, 3, 4, 5], 1),
});

export default function Showcase() {
  return (
    <CodeViewer>
      <${componentName} {...getKnobs()} />
    </CodeViewer>
  );
}
`;
}

function renderScreenerStoryTemplate(view) {
  const { componentName } = view;
  return `import React from "react";
import ${componentName} from "../../src";

export default function ScreenerStory() {
  return (
    <${componentName} />
  );
};
`;
}

function renderMXDFileTemplate(view) {
  const { componentName } = view;
  return `import { Meta, Description } from "@storybook/addon-docs/blocks";
import { getStoryName } from "storybook/storyTree";
import { docsStoryParameters } from "storybook/assets/storyParameters";
import Readme from "../README.md";
import ${componentName} from "../src";
<Meta title={\`\${getStoryName("${componentName}")}/ Docs\`} component={${componentName}} parameters={{ ...docsStoryParameters }} />
<Description markdown={Readme} />
`;
}

module.exports = {
  renderStoryFolderTemplate,
  renderBackyardStoryFolderTemplate,
  renderExampleStoryFolderTemplate,
  renderExampleStoryTemplate,
  renderVariationStoryTemplate,
  renderShowcaseStoryTemplate,
  renderScreenerStoryTemplate,
  renderMXDFileTemplate
};
