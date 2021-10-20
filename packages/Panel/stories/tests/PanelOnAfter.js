import React from "react";
import Heading from "@paprika/heading";
import Panel from "../../src";
import { TextLine, Nav } from "../helpers";

export default function PanelOnAfter() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Nav />
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
            <Heading level={2}>Cypress</Heading>
          </Panel.Header>
        </Panel>
      </p>
      <div style={{ width: "400px", margin: "25px" }}>
        <TextLine repeat={100} />
      </div>
    </>
  );
}
