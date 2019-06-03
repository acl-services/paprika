import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "./src";

const SidePanelStory = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <SidePanel isOpen={isOpen}>
        <SidePanel.Trigger onClick={toggle}>{isOpen ? "close" : "open"}</SidePanel.Trigger>
        <SidePanel.Overlay onClick={toggle} />
        <button type="button" onClick={toggle}>
          close
        </button>

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
