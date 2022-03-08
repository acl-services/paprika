import React from "react";
import ReactDOM from "react-dom";
import { StyleSheetManager } from "styled-components";
import OverflowMenu from "../../src";

class OverflowMenuWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    ReactDOM.render(
      <StyleSheetManager target={this.shadowRoot}>
        <OverflowMenu container={this.shadowRoot}>
          <OverflowMenu.Trigger>Trigger</OverflowMenu.Trigger>
          <OverflowMenu.Item onClick={() => {}}>Item 1</OverflowMenu.Item>
          <OverflowMenu.Item onClick={() => {}}>Item 2</OverflowMenu.Item>
          <OverflowMenu.Item onClick={() => {}}>Item 3</OverflowMenu.Item>
        </OverflowMenu>
      </StyleSheetManager>,
      this.shadowRoot
    );
  }
}

window.customElements.define("wc-overflow-menu", OverflowMenuWebComponent);

export default function OverflowMenuDividersExample() {
  return <wc-overflow-menu />;
}
