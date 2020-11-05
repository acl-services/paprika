import React from "react";
import Heading from "@paprika/heading";
import Panels from "../../src";
import { TextLine, Nav } from "../helpers";

export const PanelsFocusLockDisabled = () => {
  return (
    <Panels isOpen>
      <Panels.FocusLock autoFocus={false} />
      <Panels.Header>Header</Panels.Header>
    </Panels>
  );
};

export const PanelsDefaultSticky = () => {
  return (
    <React.Fragment>
      <Nav />
      <p>
        <Panels data-pka-anchor="panels" isOpen offsetY={40}>
          <Panels.Header>
            <Heading level={2}>Cypress</Heading>
          </Panels.Header>
        </Panels>
      </p>
      <div style={{ width: "400px", margin: "25px" }}>
        <TextLine repeat={100} />
      </div>
    </React.Fragment>
  );
};

export const PanelsOnAfter = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Nav />
      <p>
        <Panels
          onAfterOpen={() => {
            alert("after open");
          }}
          onAfterClose={() => {
            alert("after close");
          }}
          onClose={() => {
            setIsOpen(false);
          }}
          data-pka-anchor="panels"
          isOpen={isOpen}
          offsetY={40}
        >
          <Panels.Header>
            <Heading level={2}>Cypress</Heading>
          </Panels.Header>
        </Panels>
      </p>
      <div style={{ width: "400px", margin: "25px" }}>
        <TextLine repeat={100} />
      </div>
    </React.Fragment>
  );
};

export const PanelsFooterSticky = () => {
  return (
    <React.Fragment>
      <Nav />
      <p>
        <Panels isOpen>
          <TextLine repeat={100} />
          <Panels.Footer data-pka-anchor="panels.footer" isSticky>
            Footer
          </Panels.Footer>
        </Panels>
      </p>
    </React.Fragment>
  );
};
