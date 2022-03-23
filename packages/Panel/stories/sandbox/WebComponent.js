import React from "react";
import ReactDOM from "react-dom";
import { StyleSheetManager } from "styled-components";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import Panel from "../../src";

const noop = () => {};

function PanelExample({ container }) {
  const refHeading = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleToggle}>
        {isOpen ? "Close" : "Open"} Panel
      </button>
      <Panel
        container={container}
        isOpen={isOpen}
        onClose={handleClose}
        onAfterOpen={() => {
          if (refHeading.current) {
            refHeading.current.tabIndex = "-1";
            refHeading.current.focus();
          }
        }}
      >
        <Panel.Overlay onClose={handleClose} />
        <Panel.Header>
          <Heading level={2} displayLevel={4} ref={refHeading}>
            Panel Head
          </Heading>
        </Panel.Header>
        <Panel.Content>
          <button type="button" onClick={noop}>
            One
          </button>
          <Button onClick={noop} isSemantic>
            Two
          </Button>
          <Button onClick={noop} isSemantic={false}>
            Three
          </Button>
        </Panel.Content>
        <Panel.Footer isSticky>
          <Button onClick={handleClose} isSemantic={false}>
            Close
          </Button>
        </Panel.Footer>
      </Panel>
    </>
  );
}

class PanelWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    ReactDOM.render(
      <StyleSheetManager target={this.shadowRoot}>
        <PanelExample container={this.shadowRoot} />
      </StyleSheetManager>,
      this.shadowRoot
    );
  }
}

window.customElements.define("wc-panel", PanelWebComponent);

export default function WebComponentExample() {
  return <wc-panel />;
}
