import React from "react";
import OverflowMenu from "../../src";

const OverflowMenuWithCustomClassExample = () => {
  return (
    <React.Fragment>
      <p>
        Inspect the content of the Popover that is revealed by expanding the OverflowMenu and you will see our class
        added to it.
      </p>
      <OverflowMenu>
        <OverflowMenu.Trigger>Open</OverflowMenu.Trigger>
        <OverflowMenu.Content className="myCustomClassName" />
        <OverflowMenu.Item onClick={null}>Item 1</OverflowMenu.Item>
        <OverflowMenu.Item onClick={null}>Item 2</OverflowMenu.Item>
        <OverflowMenu.Item onClick={null}>Item 3</OverflowMenu.Item>
      </OverflowMenu>
    </React.Fragment>
  );
};

export default OverflowMenuWithCustomClassExample;
