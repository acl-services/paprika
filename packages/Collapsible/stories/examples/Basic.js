import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Collapsible from "../../src";

const BasicCollapsibleStory = () => {
  return (
    <Story>
      <Collapsible
        ariaText="collapsible section"
        isCollapsed={false}
        isDisabled={false}
        label="Collapsible Label"
        iconAlign="left"
        onClick={() => {}}
      >
        <p>
          <strong>Content</strong> – children of the &lt;Collapsible&gt; craft beer post-ironic lumbersexual man braid
          next level kale chips pop-up gochujang unicorn woke lo-fi occupy. Taxidermy vinyl plaid flannel YOLO brunch.
        </p>
      </Collapsible>
    </Story>
  );
};

export default BasicCollapsibleStory;
