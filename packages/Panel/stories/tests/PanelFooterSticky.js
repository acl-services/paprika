import React from "react";
import Panel from "../../src";
import { TextLine } from "../helpers";

export default function PanelFooterSticky() {
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
