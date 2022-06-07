import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { repeat } from "storybook/assets/styles/common.styles";
import { boolean, select } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import styled from "styled-components";
import Button from "@paprika/button";
import Panel from "@paprika/panel";
import ModalStory from "./ModalStory";
import * as types from "../src/types";
import Modal from "../src";

const storyName = getStoryName("Modal");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Modal,
};

/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

export const ZIndex = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(state => !state);
  };
  return (
    <div
      css={`
        padding: 24px;
      `}
    >
      <Button onClick={toggle}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={toggle} zIndex={99}>
        <Modal.Header>Header</Modal.Header>
        <Modal.Content>
          <p>
            The <code>zIndex</code> prop of this <code>&lt;Modal&gt;</code> is also <code>99</code>.
          </p>
          <p>
            Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be painted
            on top.
          </p>
          {repeat(4, key => (
            <p key={key}>Hexagon heirloom kitsch DIY man bun cloud bread succulent meggings.</p>
          ))}
        </Modal.Content>
        <Modal.Footer>
          <Button kind={Button.types.kind.PRIMARY}>Primary</Button>
          <Button kind={Button.types.kind.MINOR} onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        css={`
          position: relative;
          z-index: 99;
        `}
      >
        <p>
          The <code>z-index</code> of this content is <code>99</code>.
        </p>
        {repeat(12, key => (
          <p key={key}>
            Vaporware brunch kickstarter bitters palo santo af vexillologist organic food truck bicycle rights.
          </p>
        ))}
      </div>
    </div>
  );
};

ZIndex.story = {
  name: "Z Index",
  parameters: testStoryParameters,
};

export const nestedPanel = () =>
  React.createElement(() => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
      setIsOpen(state => !state);
    };

    return (
      <ModalStory>
        <Modal.Content>
          <Panel isOpen={isOpen} onClose={toggle}>
            <Panel.Overlay />
            <Panel.Trigger onClick={toggle}>{isOpen ? "close" : "open side panel"}</Panel.Trigger>
            <Panel.Header>Header</Panel.Header>
          </Panel>
        </Modal.Content>
      </ModalStory>
    );
  });

nestedPanel.story = {
  name: "with nested Panel",
  parameters: testStoryParameters,
};

export const wrappingModal = () =>
  React.createElement(() => {
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
          <form
            onSubmit={event => {
              alert("submitted");
              event.preventDefault();
            }}
          >
            <Modal.Header hasCloseButton={boolean("Has close button", true, "Header")}>Header</Modal.Header>
            <Modal.Content>
              <input type="text" defaultValue="press enter while focus" />
            </Modal.Content>
            <Modal.Footer>
              <Button isSubmit isSemantic={false} kind={Button.types.kind.PRIMARY}>
                Primary
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </LongBlock>
    );
  });

wrappingModal.story = {
  name: "with form wrapping modal components",
  parameters: testStoryParameters,
};

export const withPendo = () =>
  React.createElement(() => (
    <>
      <div id="pendo-base" style={{ position: "absolute", zIndex: 10, background: "lightgray", top: "300px" }}>
        <h1>Pendo popover</h1>
        <input />
      </div>
      <ModalStory>
        <Modal.Content>Modal content</Modal.Content>
      </ModalStory>
    </>
  ));
withPendo.story = {
  name: "with pendo popover",
  parameters: testStoryParameters,
};
