import React from "react";
import StoryHeader from "storybook/components/StoryHeader";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Collapsible from "../../src";

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
  const [isCollapsed5, setIsCollapsed5] = React.useState(true);
  const [isCollapsed6, setIsCollapsed6] = React.useState(true);

  return (
    <Story>
      <StoryHeader componentName="Collapsible" storyType="Variations" />

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
      <Rule />
      <h5>Nested Collapsible</h5>
      <Collapsible
        {...collapsibleDefaultProps}
        label="Click to show parent content"
        isCollapsed={isCollapsed5}
        iconAlign="right"
        onClick={() => setIsCollapsed5(prevCollapsed => !prevCollapsed)}
      >
        Parent content
        <Collapsible
          {...collapsibleDefaultProps}
          label="Click to show child content"
          isCollapsed={isCollapsed6}
          iconAlign="right"
          onClick={() => setIsCollapsed6(prevCollapsed => !prevCollapsed)}
        >
          Child content
        </Collapsible>
      </Collapsible>
    </Story>
  );
};

export default ExampleStory;
