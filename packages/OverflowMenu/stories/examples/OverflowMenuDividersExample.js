import React from "react";
import OverflowMenu from "../../src";

const OverflowMenuDividersExample = () => (
    <OverflowMenu align="bottom">
      <OverflowMenu.Trigger>Trigger</OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={() => {}}>Item 1</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 2</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 3</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 4</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 5</OverflowMenu.Item>
    </OverflowMenu>
  );

export default OverflowMenuDividersExample;
