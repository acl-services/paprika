import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Collapsible from "../../src";

const BasicCollapsibleStory = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <Story>
      <Collapsible
        a11yText="collapsible section"
        isCollapsed={isCollapsed}
        isDisabled={false}
        label="Click me to show/hide the content"
        iconAlign="left"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <p>
          <strong>Content</strong> – children of the &lt;Collapsible&gt; is hidden while the collapsible is collapsed,
          and visible with it is expanded.
        </p>
      </Collapsible>
    </Story>
  );
};

export default BasicCollapsibleStory;
