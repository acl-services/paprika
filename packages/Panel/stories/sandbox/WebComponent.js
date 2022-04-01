import React from "react";
import ReactDOM from "react-dom";
import { StyleSheetManager } from "styled-components";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import Panel from "../../src";

const noop = () => {};

function PanelExample({ container }) {
  const refHeading = React.useRef(null);
  const refTrigger = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Recommended practice for optimal accessibility
  const handleAfterOpen = () => {
    if (refHeading.current) {
      refHeading.current.tabIndex = "-1";
      refHeading.current.focus();
    }
  };

  // Required practice for accessibility
  // Needs to be handled manually when used within a web component
  const handleAfterClose = () => {
    if (refTrigger.current) refTrigger.current.focus();
  };

  return (
    <>
      <button type="button" onClick={handleToggle} ref={refTrigger}>
        {isOpen ? "Close" : "Open"} Panel
      </button>
      <Panel
        container={container}
        isOpen={isOpen}
        onClose={handleClose}
        onAfterOpen={handleAfterOpen}
        onAfterClose={handleAfterClose}
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
