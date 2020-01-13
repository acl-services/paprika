import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "../src";
import { Nav, TextLine } from "./helpers";

function onClose() {
  alert("callback onClose");
}

storiesOf("SidePanel / Group", module).add("SidePanel.Group", () => (
  <SidePanel.Group>
    <SidePanel onClose={onClose} isOpen width={350}>
      <SidePanel.Header>With Header</SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
    <SidePanel onClose={onClose} isOpen width={350}>
      <SidePanel.Header>With Header</SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
    <SidePanel onClose={onClose} isOpen width={350}>
      <SidePanel.Header kind="primary">With Header</SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
  </SidePanel.Group>
));

storiesOf("SidePanel / Group", module).add("SidePanel.Group has offsetY", () => (
  <SidePanel.Group offsetY={40}>
    <Nav />
    <TextLine repeat={100} />
    <SidePanel onClose={onClose} isOpen width={400}>
      <SidePanel.Header>With Header</SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
    <SidePanel kind="child" onClose={onClose} isOpen width={400}>
      <SidePanel.Header>With Header</SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
  </SidePanel.Group>
));

storiesOf("SidePanel / Group", module).add("SidePanel.Group has offsetY and Overlay", () => (
  <React.Fragment>
    <Nav />
    <TextLine repeat={100} />
    <SidePanel.Group offsetY={40}>
      <SidePanel.Group.Overlay onClose={onClose} />
      <SidePanel onClose={onClose} isOpen width="50%">
        <SidePanel.Header>With Header</SidePanel.Header>
        <SidePanel.Overlay />
      </SidePanel>
      <SidePanel onClose={onClose} isOpen width={300}>
        <SidePanel.Header>With Header</SidePanel.Header>
        <SidePanel.Overlay />
      </SidePanel>
      <SidePanel kind="child" onClose={onClose} isOpen width={300}>
        <SidePanel.Header>With Header</SidePanel.Header>
        <SidePanel.Overlay />
      </SidePanel>
    </SidePanel.Group>
  </React.Fragment>
));
