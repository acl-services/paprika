import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../src";

storiesOf("Modal / FocusLock", module)
  .add("with disabled autofocus", () => (
    <Modal isOpen>
      <Modal.FocusLock autoFocus={false} />
      <Modal.Header>Header</Modal.Header>
      <Modal.Content>
        <p>autofocus disabled</p>
      </Modal.Content>
    </Modal>
  ))
  .add("with autofocus on input", () => (
    <Modal isOpen>
      <Modal.Header>Header</Modal.Header>
      <Modal.Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Modal.Content>
    </Modal>
  ));
