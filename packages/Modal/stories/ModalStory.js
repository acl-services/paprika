import React from "react";
import { boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import Button from "@paprika/button";
import * as types from "../src/types";

import Modal from "../src";

/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;


const ModalStory = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <LongBlock>
      <Button onClick={toggle}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={toggle}
        size={select("Size", [types.SMALL, types.MEDIUM, types.LARGE], types.MEDIUM, "Modal")}
      >
        <Modal.Header hasCloseButton={boolean("Has close button", true, "Header")}>Header</Modal.Header>
        {children}
        <Modal.Footer>
          <Button size={Button.types.size.LARGE} kind={Button.types.kind.PRIMARY}>
            Primary
          </Button>
          <Button size={Button.types.size.LARGE}>Secondary</Button>
          <Button size={Button.types.size.LARGE} kind={Button.types.kind.MINOR} onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </LongBlock>
  );
};

export default ModalStory;
