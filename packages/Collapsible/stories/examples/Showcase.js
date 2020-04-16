import React from "react";
import faker from "faker";
import StoryHeader from "storybook/components/StoryHeader";
import { Story } from "storybook/assets/styles/common.styles";
import { boolean, select, text } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";

import Collapsible from "../../src";

const childrenSelections = {
  basic: faker.lorem.sentences(5),
  long: faker.lorem.paragraphs(15),
};

const exampleProps = () => ({
  children: childrenSelections[select("children", Object.keys(childrenSelections), "basic")],
  hasOnlyIconToggle: boolean("hasOnlyIconToggle", false),
  isDisabled: boolean("isDisabled", false),
  label: text("label", "Click to open and collapse"),
  iconAlign: select("iconAlign", ["left", "right"], "left"),
});

const ExampleStory = props => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <Story>
      <StoryHeader componentName="Collapsible" />
      <L10n locale="en">
        <Collapsible
          {...props}
          isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(prevCollapsed => !prevCollapsed)}
        >
          {props.children}
        </Collapsible>
      </L10n>
    </Story>
  );
};

export default () => <ExampleStory {...exampleProps()} />;
