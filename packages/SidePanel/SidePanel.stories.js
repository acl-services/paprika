import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/Heading";

import SidePanel from "./src";

const SidePanelStory = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      hello lets open a sidepanel
      <SidePanel isOpen={isOpen} onClose={close}>
        <SidePanel.Trigger onClick={open}>{isOpen ? "close" : "open"}</SidePanel.Trigger>
        <SidePanel.Header onCloseClick={close}>
          <Heading level={2}>SidePajusnel header</Heading>
        </SidePanel.Header>
        <SidePanel.Overlay />
        <label htmlFor="name">
          name: <input id="name" type="text" />
        </label>

        <label htmlFor="lastName">
          last name: <input id="lastName" type="text" />
        </label>

        <label htmlFor="select">
          select:
          <select id="select">
            <option>one</option>
            <option>two</option>
          </select>
        </label>
      </SidePanel>
    </React.Fragment>
  );
};

storiesOf("SidePanel", module).add("Basic", () => <SidePanelStory />);

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
