import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import SidePanel from "@paprika/sidepanel";
import Modal from "../src";

/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

const DemoFullWidthContent = styled.div`
  background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
  flex: 1 1 auto;
`;

const ModalStory = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <LongBlock>
      <Button onClick={toggle}>Open</Button>
      <Modal isOpen={isOpen} onClose={toggle}>
        <Modal.Header hasCloseButton={boolean("Has close button", true, "Modal.Header")}>Header</Modal.Header>
        {children}
        <Modal.Footer>
          <Button kind="primary">Primary</Button>
          <Button>Secondary</Button>
          <Button kind="minor" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </LongBlock>
  );
};

storiesOf("Modal", module)
  .addDecorator(withKnobs)
  .add("Basic", () => (
    <ModalStory>
      <Modal.Content>
        {Array(25)
          .fill(null)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>Some content here</p>
          ))}
      </Modal.Content>
    </ModalStory>
  ))
  .add("with overridden FocusTrap", () => (
    <ModalStory>
      <Modal.FocusTrap
        initialFocus={() => {
          return document.querySelector("[data-pka-anchor='modal.focustrap.input']");
        }}
      />
      <Modal.Content>
        <input type="text" data-pka-anchor="modal.focustrap.input" />
      </Modal.Content>
    </ModalStory>
  ))
  .add("with full-width content", () => (
    <ModalStory>
      <DemoFullWidthContent />
    </ModalStory>
  ))
  .add("with nested SidePanel", () =>
    React.createElement(() => {
      const [isOpen, setIsOpen] = React.useState(false);
      const toggle = () => {
        setIsOpen(state => !state);
      };

      return (
        <ModalStory>
          <Modal.Content>
            <SidePanel isOpen={isOpen} onClose={toggle}>
              <SidePanel.Overlay />
              <SidePanel.Trigger kind="primary" onClick={toggle}>
                {isOpen ? "close" : "open side panel"}
              </SidePanel.Trigger>
              <SidePanel.Header>
                <Heading level={2}>Header</Heading>
              </SidePanel.Header>
            </SidePanel>
          </Modal.Content>
        </ModalStory>
      );
    })
  );
