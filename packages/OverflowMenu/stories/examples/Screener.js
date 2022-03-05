import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import OverflowMenu from "../../src/OverflowMenu";

const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "600px",
};

const Screener = () => (
  <Story style={style}>
    <OverflowMenu align="right" edge="left" maxWidth={300} zIndex={1} isOpen>
      <OverflowMenu.Trigger>Right</OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={() => {}}>Item 1</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 2</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 3</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 4</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 5</OverflowMenu.Item>
    </OverflowMenu>
    <OverflowMenu align="top" edge="left" maxWidth={300} zIndex={1} isOpen>
      <OverflowMenu.Trigger>Top</OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={() => {}}>Item 1</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 2</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 3</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 4</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 5</OverflowMenu.Item>
    </OverflowMenu>

    <OverflowMenu align="bottom" edge="left" maxWidth={300} zIndex={1} isOpen>
      <OverflowMenu.Trigger>Bottom</OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={() => {}}>Item 1</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 2</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 3</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Item 4</OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item onClick={() => {}}>Item 5</OverflowMenu.Item>
    </OverflowMenu>
    <OverflowMenu align="left" edge="left" maxWidth={300} zIndex={1} isOpen>
      <OverflowMenu.Trigger>Left</OverflowMenu.Trigger>
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
