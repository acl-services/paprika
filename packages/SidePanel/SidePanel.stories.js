import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/Heading";

import SidePanel from "./src";

const Nav = () => <div style={{ width: "100%", height: "40px", background: "#4B2164" }} />;

const TextLine = props => {
  const { repeat } = props;

  return [
    ...Object.keys(Array(repeat).fill(null)).map(() => (
      <svg viewBox="0 0 100 4" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#EEE" x="0" width="100%" height="2px" rx="2" />
      </svg>
    )),
  ];
};

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
      <SidePanel isOpen={isOpen} onClose={close} offsetY={props.offsetY}>
        <SidePanel.Trigger onClick={open}>{isOpen ? "close" : "open"}</SidePanel.Trigger>
        <SidePanel.Header kind={props.kind} onCloseClick={close}>
          <Heading level={2}>Header</Heading>
        </SidePanel.Header>
        <SidePanel.Overlay />
        <SidePanel.Content>
          <TextLine repeat={100} />
        </SidePanel.Content>
      </SidePanel>
    </React.Fragment>
  );
};

SidePanelStory.propTypes = {
  kind: PropTypes.oneOf(["default", "primary"]),
  offsetY: PropTypes.number,
};

SidePanelStory.defaultProps = {
  kind: "default",
  offsetY: 0,
};

storiesOf("SidePanel", module).add("Basic", () => <SidePanelStory />);

storiesOf("SidePanel", module).add("Primary", () => <SidePanelStory kind="primary" />);

storiesOf("SidePanel", module).add("SidePanel Default Sticky", () => (
  <React.Fragment>
    <Nav />
    <p>
      <SidePanelStory offsetY={40} />
    </p>
    <div style={{ width: "400px", margin: "25px" }}>
      <TextLine repeat={100} />
    </div>
  </React.Fragment>
));

storiesOf("SidePanel", module).add("SidePanel Primary Sticky", () => (
  <React.Fragment>
    <Nav />
    <p>
      <SidePanelStory kind="primary" offsetY={40} />
    </p>
    <div style={{ width: "400px", margin: "25px" }}>
      <TextLine repeat={100} />
    </div>
  </React.Fragment>
));

storiesOf("SidePanel", module).add("SidePanel.Header", () => (
  <SidePanel isOpen>
    <SidePanel.Header>
      <Heading level={2}>With Header</Heading>
    </SidePanel.Header>
    <input type="text" />
    <button type="button">button</button>
  </SidePanel>
));

storiesOf("SidePanel", module).add("SidePanel.Content", () => (
  <SidePanel isOpen>
    <SidePanel.Header>
      <Heading level={2}>With Header</Heading>
    </SidePanel.Header>
    <SidePanel.Content>
      <input type="text" />
      <button type="button">button</button>
    </SidePanel.Content>
  </SidePanel>
));

storiesOf("SidePanel", module).add("SidePanel offsetY", () => (
  <React.Fragment>
    <div style={{ width: "100%", height: "40px", background: "#4B2164" }} />
    <SidePanel isOpen offsetY={40}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <SidePanel.Content>
        <input type="text" />
        <button type="button">button</button>
      </SidePanel.Content>
    </SidePanel>
  </React.Fragment>
));

function Line() {
  return <div style={{ width: "100%", margin: "12px", height: "25px", background: "#EEE" }} />;
}

storiesOf("SidePanel", module).add("SidePanel Scroll Sticky", () => (
  <React.Fragment>
    <div style={{ width: "100%", height: "40px", background: "#4B2164" }} />
    {[...Object.keys(Array(100).fill(null))].map(() => (
      <Line />
    ))}
    <SidePanel isOpen offsetY={40}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <SidePanel.Content>
        <input type="text" />
        <button type="button">button</button>
      </SidePanel.Content>
    </SidePanel>
  </React.Fragment>
));

storiesOf("SidePanel", module).add("SidePanel Header kind primary", () => (
  <SidePanel isOpen>
    <SidePanel.Header onCloseClick={() => {}} kind="primary">
      <Heading level={2}>With Header</Heading>
    </SidePanel.Header>
  </SidePanel>
));
