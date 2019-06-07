import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/heading";
import SidePanel, { SidePanelGroup } from "../src";
import { Nav, TextLine } from "./helpers";

function onClose() {
  alert("callback onClose");
}

storiesOf("SidePanel / SidePanelGroup", module).add("SidePanelGroup", () => (
  <SidePanelGroup>
    <SidePanel onClose={onClose} isOpen width={350}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
    <SidePanel onClose={onClose} isOpen width={350}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
    <SidePanel onClose={onClose} isOpen width={350}>
      <SidePanel.Header>
        <Heading kind="primary" level={2}>
          With Header
        </Heading>
      </SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
  </SidePanelGroup>
));

storiesOf("SidePanel / SidePanelGroup", module).add("SidePanelGroup has offsetY", () => (
  <SidePanelGroup offsetY={40}>
    <Nav />
    <TextLine repeat={100} />
    <SidePanel onClose={onClose} isOpen width={400}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
    <SidePanel kind="child" onClose={onClose} isOpen width={400}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <SidePanel.Overlay />
    </SidePanel>
  </SidePanelGroup>
));

storiesOf("SidePanel / SidePanelGroup", module).add("SidePanelGroup has offsetY and Overlay", () => (
  <React.Fragment>
    <Nav />
    <TextLine repeat={100} />
    <SidePanelGroup offsetY={40}>
      <SidePanelGroup.Overlay />
      <SidePanel onClose={onClose} isOpen width={300}>
        <SidePanel.Header>
          <Heading level={2}>With Header</Heading>
        </SidePanel.Header>
        <SidePanel.Overlay />
      </SidePanel>
      <SidePanel onClose={onClose} isOpen width={300}>
        <SidePanel.Header>
          <Heading level={2}>With Header</Heading>
        </SidePanel.Header>
        <SidePanel.Overlay />
      </SidePanel>
      <SidePanel kind="child" onClose={onClose} isOpen width={300}>
        <SidePanel.Header>
          <Heading level={2}>With Header</Heading>
        </SidePanel.Header>
        <SidePanel.Overlay />
      </SidePanel>
    </SidePanelGroup>
  </React.Fragment>
));
