import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Collapsible from "../../src/Collapsible";

const dummyContent = (
  <p>
    <strong>Content</strong> – children of the &lt;Collapsible&gt; are hidden when it is collapsed, and visible when it
    is expanded.
  </p>
);

const collapsibleDefaultProps = {
  a11yText: "collapsible section",
  isDisabled: false,
  label: "Click to show/hide the content",
  iconAlign: "left",
};

const ExampleStory = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isCollapsed2, setIsCollapsed2] = React.useState(false);
  const [isCollapsed3, setIsCollapsed3] = React.useState(false);
  const [isCollapsed4, setIsCollapsed4] = React.useState(false);

  return (
    <Story>
      <Collapsible
        {...collapsibleDefaultProps}
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(prevCollapsed => !prevCollapsed)}
      >
        {dummyContent}
      </Collapsible>
      <Rule />
      <Collapsible
        {...collapsibleDefaultProps}
        isCollapsed={isCollapsed2}
        iconAlign="right"
        onClick={() => setIsCollapsed2(prevCollapsed => !prevCollapsed)}
      >
        {dummyContent}
      </Collapsible>
      <Rule />
      <Collapsible {...collapsibleDefaultProps} label="Disabled" isDisabled isCollapsed onClick={() => {}}>
        {dummyContent}
      </Collapsible>
      <Rule />
      <Collapsible
        {...collapsibleDefaultProps}
        isCollapsed={isCollapsed3}
        hasOnlyIconToggle
        onClick={() => setIsCollapsed3(prevCollapsed => !prevCollapsed)}
      >
        {dummyContent}
      </Collapsible>
      <Rule />
      <Collapsible
        {...collapsibleDefaultProps}
        isCollapsed={isCollapsed4}
        hasOnlyIconToggle
        iconAlign="right"
        onClick={() => setIsCollapsed4(prevCollapsed => !prevCollapsed)}
      >
        {dummyContent}
      </Collapsible>
    </Story>
  );
};

export default ExampleStory;
