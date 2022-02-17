import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import OverflowMenu from "../../src/OverflowMenu";

const Screener = () => (
  <Story>
    <OverflowMenu align="bottom" isOpen edge="left" maxWidth={300} zIndex={1}>
      <OverflowMenu.Trigger>Trigger</OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={() => {}}>Item 1</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 2</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 3</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 4</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 5</OverflowMenu.Item>
    </OverflowMenu>
  </Story>
);

export default Screener;
