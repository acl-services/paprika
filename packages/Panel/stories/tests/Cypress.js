import React from "react";
import Heading from "@paprika/heading";
import Panel from "../../src";
import { TextLine } from "../helpers";

export function PanelDefaultSticky() {
  return (
    <>
      <p>
        <Panel data-pka-anchor="panel" isOpen offset={{ top: 40 }}>
          <Panel.Header>
            <Heading>Cypress</Heading>
          </Panel.Header>
        </Panel>
      </p>
      <div style={{ width: "400px", margin: "25px" }}>
        <TextLine repeat={100} />
      </div>
    </>
  );
}

export function PanelFocusLockDisabled() {
  return (
    <Panel isOpen>
      <Panel.FocusLock autoFocus={false} />
      <Panel.Header>Header</Panel.Header>
    </Panel>
  );
}

export function PanelFooterSticky() {
  return (
    <>
      <p>
        <Panel isOpen>
          <TextLine repeat={100} />
          <Panel.Footer data-pka-anchor="panel.footer" isSticky>
            Footer
          </Panel.Footer>
        </Panel>
      </p>
    </>
  );
}

export function PanelOnAfter() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <p>
        <Panel
          onAfterOpen={() => {
            alert("after open");
          }}
          onAfterClose={() => {
            alert("after close");
          }}
          onClose={() => {
            setIsOpen(false);
          }}
          data-pka-anchor="panel"
          isOpen={isOpen}
          offsetY={40}
        >
          <Panel.Header>
            <Heading>Cypress</Heading>
          </Panel.Header>
        </Panel>
      </p>
      <div style={{ width: "400px", margin: "25px" }}>
        <TextLine repeat={100} />
      </div>
    </>
  );
}
