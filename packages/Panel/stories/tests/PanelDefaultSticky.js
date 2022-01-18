import React from "react";
import Heading from "@paprika/heading";
import Panel from "../../src";
import { TextLine } from "../helpers";

export default function PanelDefaultSticky() {
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
