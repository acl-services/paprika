import React from "react";
import Heading from "@paprika/heading";
import SidePanel from "../../src";
import { TextLine, Nav } from "../helpers";

export const SidePanelFocusLockDisabled = () => {
  return (
    <SidePanel isOpen>
      <SidePanel.FocusLock autoFocus={false} />
      <SidePanel.Header>Header</SidePanel.Header>
    </SidePanel>
  );
};

export const SidePanelDefaultSticky = () => {
  return (
    <React.Fragment>
      <Nav />
      <p>
        <SidePanel data-pka-anchor="sidepanel" isOpen offsetY={40}>
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

export const SidePanelOnAfter = () => {
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
          data-pka-anchor="sidepanel"
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

export const SidePanelFooterSticky = () => {
  return (
    <React.Fragment>
      <Nav />
      <p>
        <SidePanel isOpen>
          <TextLine repeat={100} />
          <SidePanel.Footer data-pka-anchor="sidepanel.footer" isSticky>
            Footer
          </SidePanel.Footer>
        </SidePanel>
      </p>
    </React.Fragment>
  );
};
