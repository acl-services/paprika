import React from "react";
import faker from "faker";
import ExampleStory from "storybook/components/ExampleStory";
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

const Showcase = props => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <ExampleStory storyName="Collapsible" tagline={ExampleStory.defaultTaglines.showcase}>
      <L10n locale="en">
        <Collapsible
          {...props}
          isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(prevCollapsed => !prevCollapsed)}
        >
          {props.children}
        </Collapsible>
      </L10n>
    </ExampleStory>
  );
};

export default () => <Showcase {...exampleProps()} />;
