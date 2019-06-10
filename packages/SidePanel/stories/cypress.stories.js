import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/heading";
import SidePanel from "../src";
import { TextLine, Nav } from "./helpers";

storiesOf("SidePanel / cypress", module).add("SidePanel Default Sticky", () => (
  <React.Fragment>
    <Nav />
    <p>
      <SidePanel data-qa-anchor="sidepanel" isOpen offsetY={40}>
        <SidePanel.Header>
          <Heading level={2}>Cypress</Heading>
        </SidePanel.Header>
      </SidePanel>
    </p>
    <div style={{ width: "400px", margin: "25px" }}>
      <TextLine repeat={100} />
    </div>
  </React.Fragment>
));

storiesOf("SidePanel / cypress", module).add("SidePanel Footer Sticky", () => (
  <React.Fragment>
    <Nav />
    <p>
      <SidePanel isOpen>
        <TextLine repeat={100} />
        <SidePanel.Footer data-qa-anchor="sidepanel.footer" isSticky>
          Footer
        </SidePanel.Footer>
      </SidePanel>
    </p>
  </React.Fragment>
));

const SidePanelOnAfter = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <React.Fragment>
      <Nav />
      <p>
        <SidePanel
          onAfterOpen={() => {
            alert("after open");
          }}
          onAfterClose={() => {
            alert("after close");
          }}
          onClose={() => {
            setIsOpen(false);
          }}
          data-qa-anchor="sidepanel"
          isOpen={isOpen}
          offsetY={40}
        >
          <SidePanel.Header>
            <Heading level={2}>Cypress</Heading>
          </SidePanel.Header>
        </SidePanel>
      </p>
      <div style={{ width: "400px", margin: "25px" }}>
        <TextLine repeat={100} />
      </div>
    </React.Fragment>
  );
};

storiesOf("SidePanel / cypress", module).add("SidePanel onAfterOpen onAfterClose", () => <SidePanelOnAfter />);
