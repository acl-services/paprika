import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import SidePanel from "../src";
import { Nav, TextLine } from "./helpers";

const SidePanelStory = props => {
  const { disableBodyOverflow, hasOverlay } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Nav />
      <SidePanel disableBodyOverflow={disableBodyOverflow} isOpen={isOpen} onClose={toggle} offsetY={40}>
        {hasOverlay ? <SidePanel.Overlay /> : null}
        <SidePanel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </SidePanel.Trigger>
        <SidePanel.Header kind="primary">Header</SidePanel.Header>
        <TextLine repeat={100} />
        <SidePanel.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </SidePanel.Footer>
      </SidePanel>
      <TextLine repeat={100} />
    </React.Fragment>
  );
};

const SidePanelCompactStory = props => {
  const { disableBodyOverflow, hasOverlay } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Nav />
      <SidePanel disableBodyOverflow={disableBodyOverflow} isOpen={isOpen} onClose={toggle} offsetY={40} isCompact>
        {hasOverlay ? <SidePanel.Overlay /> : null}
        <SidePanel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </SidePanel.Trigger>
        <SidePanel.Header>Header</SidePanel.Header>
        <TextLine repeat={100} />
      </SidePanel>
      <TextLine repeat={100} />
    </React.Fragment>
  );
};

SidePanelStory.defaultProps = {
  disableBodyOverflow: true,
  hasOverlay: true,
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
          <Button data-pka-anchor="button-sidepanel1" onClick={handleParent1} size="small">
            Parent 1
          </Button>
          <Button data-pka-anchor="button-sidepanel2" onClick={handleParent2} size="small">
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
      <SidePanel.Group offsetY={40}>
        <SidePanel.Group.Overlay />
        <SidePanel data-pka-anchor="sidepanel1" width={400} onClose={handleParent1} isOpen={spParent1}>
          <SidePanel.Header kind="primary">Parent 1</SidePanel.Header>
          <TextLine repeat={100} />
          <Button>Test button</Button>
        </SidePanel>
        <SidePanel data-pka-anchor="sidepanel2" onClose={handleParent2} width={400} isOpen={spParent2}>
          <SidePanel.Header kind="primary">Parent 2</SidePanel.Header>
          <Button
            onClick={() => {
              setSpChild(state => !state);
            }}
          >
            Toggle Child
          </Button>
        </SidePanel>
        <SidePanel
          data-pka-anchor="sidepanel-child"
          onClose={() => {
            setSpChild(false);
          }}
          kind="child"
          width={400}
          isCompact
          isOpen={spChild}
        >
          <SidePanel.Header>Child of Parent 2</SidePanel.Header>
          <TextLine repeat={100} />
          <Button>Test button</Button>
        </SidePanel>
      </SidePanel.Group>
    </React.Fragment>
  );
};

storiesOf("SidePanel", module).add("Basic", () => <SidePanelStory />);
storiesOf("SidePanel", module).add("Basic isCompact", () => <SidePanelCompactStory hasOverlay />);
storiesOf("SidePanel", module).add("Basic without overlay", () => (
  <SidePanelStory disableBodyOverflow={false} hasOverlay={false} />
));
storiesOf("SidePanel", module).add("Multiple Sidepanels", () => <SidePanelStoryGroup />);
storiesOf("SidePanel", module).add("Basic with body scrollable", () => (
  <React.Fragment>
    <TextLine repeat={100} />
    <SidePanel disableBodyOverflow={false} onClose={() => {}} isOpen>
      <SidePanel.Header>Child of Parent 2</SidePanel.Header>
    </SidePanel>
  </React.Fragment>
));
