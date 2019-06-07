import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/heading";
import Button from "@paprika/button";
import SidePanel, { SidePanelGroup } from "../src";
import { Nav, TextLine } from "./helpers";

const SidePanelStory = props => {
  const [isOpen, setIsOpen] = React.useState(true);
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Nav />
      <Button onClick={open}>open</Button>
      <TextLine repeat={100} />
      <SidePanel isOpen={isOpen} onClose={close} offsetY={40}>
        <SidePanel.Overlay />
        <SidePanel.Trigger onClick={open}>{isOpen ? "close" : "open"}</SidePanel.Trigger>
        <SidePanel.Header kind={props.kind}>
          <Heading level={2}>Header</Heading>
        </SidePanel.Header>
        <TextLine repeat={100} />
      </SidePanel>
    </React.Fragment>
  );
};

const SidePanelStoryGroup = () => {
  const [spParent1, setSpParent1] = React.useState(true);
  const [spParent2, setSpParent2] = React.useState(true);
  const [spChild, setSpChild] = React.useState(true);
  const menu = {
    padding: "8px",
    display: "flex",
    width: "150px",
    justifyContent: "space-between",
  };

  const handleParent2 = () => {
    if (spParent2) {
      setSpParent2(false);
      setSpChild(false);
    } else {
      setSpParent2(true);
    }
  };

  const handleParent1 = () => {
    setSpParent1(state => !state);
  };

  return (
    <React.Fragment>
      <Nav>
        <div style={menu}>
          <Button data-qa-anchor="button-sidepanel1" onClick={handleParent1} size="small">
            Parent 1
          </Button>
          <Button data-qa-anchor="button-sidepanel2" onClick={handleParent2} size="small">
            Parent 2
          </Button>
        </div>
      </Nav>
      <div style={{ display: "flex" }}>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
      </div>
      <SidePanelGroup offsetY={40}>
        <SidePanel data-qa-anchor="sidepanel1" width={400} onClose={handleParent1} isOpen={spParent1}>
          <SidePanel.Header kind="primary">
            <Heading level={2}>Parent 1</Heading>
          </SidePanel.Header>
          <TextLine repeat={100} />
        </SidePanel>
        <SidePanel data-qa-anchor="sidepanel2" onClose={handleParent2} width={400} isOpen={spParent2}>
          <SidePanel.Header kind="primary">
            <Heading level={2}>Parent 2</Heading>
          </SidePanel.Header>
          <Button
            onClick={() => {
              setSpChild(state => !state);
            }}
          >
            Toggle Child
          </Button>
        </SidePanel>
        <SidePanel
          data-qa-anchor="sidepanel-child"
          onClose={() => {
            setSpChild(false);
          }}
          kind="child"
          width={400}
          isOpen={spChild}
        >
          <SidePanel.Header>
            <Heading level={2}>Child of Parent 2</Heading>
          </SidePanel.Header>
          <TextLine repeat={100} />
        </SidePanel>
      </SidePanelGroup>
    </React.Fragment>
  );
};

storiesOf("SidePanel", module).add("Basic", () => <SidePanelStory />);
storiesOf("SidePanel", module).add("Multiple Sidepanels", () => <SidePanelStoryGroup />);
