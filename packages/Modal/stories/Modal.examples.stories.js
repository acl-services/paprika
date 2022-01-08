import React from "react";
import { repeat } from "storybook/assets/styles/common.styles";
import ExampleStory from "storybook/components/ExampleStory";
import { getStoryName } from "storybook/storyTree";
import ModalStory from "./ModalStory";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";
import stylers from "@paprika/stylers";

import Modal from "../src";

const storyName = getStoryName("Modal");

const ModalStoryParameters = {
  parameters: {
    viewMode: "story",
    options: {
      isToolshown: false,
      docs: { disable: true },
    },
  },
};

export default {
  title: `${storyName}/Examples`,
  component: Modal,
};

const DemoFullWidthContent = styled.div`
  background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
  height: 1000px;
`;

export const basic = () => (
  <ExampleStory component="Modal" storyName="Basic" fileName="">
    <ModalStory>
      <Modal.Content>
        {repeat(25, key => (
          <p key={key}>Some content here</p>
        ))}
      </Modal.Content>
    </ModalStory>
  </ExampleStory>
);

basic.story = ModalStoryParameters;

export const fullWidthContent = () => (
  <ExampleStory component="Modal" storyName="with full-width content" fileName="">
    <ModalStory>
      <DemoFullWidthContent />
    </ModalStory>
  </ExampleStory>
);

fullWidthContent.story = ModalStoryParameters;

export const autoFocusInput = () => (
  <ExampleStory component="Modal" storyName="with autofocus on input" fileName="">
    <Modal isOpen>
      <Modal.Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Modal.Content>
    </Modal>
  </ExampleStory>
);

autoFocusInput.story = ModalStoryParameters;

export const disableAutoFocus = () => (
  <ExampleStory component="Modal" storyName="with disabled autofocus" fileName="">
    <Modal isOpen>
      <Modal.FocusLock autoFocus={false} />
      <Modal.Header>Header</Modal.Header>
      <Modal.Content>
        <p>autofocus disabled</p>
      </Modal.Content>
    </Modal>
  </ExampleStory>
);

disableAutoFocus.story = ModalStoryParameters;

export const focusHeading = () => {
  const refHeading = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);

  return (
    <ExampleStory component="Modal" storyName="with focus on heading" fileName="">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        onAfterOpen={() => {
          if (refHeading.current) refHeading.current.focus();
        }}
        css={`
          [data-pka-anchor="heading"]:focus {
            ${stylers.focusRing.subtle()}
          }
        `}
      >
        <Modal.Header refHeading={refHeading}>Header</Modal.Header>
        <Modal.Content>
          <p>
            Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw denim
            tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch ramps
            cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian drinking
            vinegar.
          </p>
        </Modal.Content>
      </Modal>
    </ExampleStory>
  );
};

focusHeading.story = ModalStoryParameters;

export const headerColoured = () => (
  <ExampleStory component="Modal" storyName="with header coloured" fileName="">
    <Modal isOpen>
      <Modal.FocusLock autoFocus={false} />
      <Modal.Header style={{ backgroundColor: tokens.color.blueLighten30 }}>
        This is a really long example This is a really long exampleThis is a really long exampleThis is a really long
        exampleThis is a really long exampleThis is a really long example
      </Modal.Header>
      <Modal.Content>
        {repeat(8, key => (
          <p key={key} style={{ marginTop: 0 }}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Modal.Content>
    </Modal>
  </ExampleStory>
);

headerColoured.story = ModalStoryParameters;

export const truncateHeader = () => (
  <ExampleStory component="Modal" storyName="with truncated (single line) header text" fileName="">
    <Modal isOpen>
      <Modal.FocusLock autoFocus={false} />
      <Modal.Header isSingleLine>
        This is a really long example This is a really long exampleThis is a really long exampleThis is a really long
        exampleThis is a really long exampleThis is a really long example
      </Modal.Header>
      <Modal.Content>
        {repeat(8, key => (
          <p key={key} style={{ marginTop: 0 }}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Modal.Content>
    </Modal>
  </ExampleStory>
);

truncateHeader.story = ModalStoryParameters;

export const noCloseButton = () => (
  <ExampleStory component="Modal" storyName="with truncated (single line) header text and no close button" fileName="">
    <Modal isOpen>
      <Modal.FocusLock autoFocus={false} />
      <Modal.Header isSingleLine hasCloseButton={false}>
        This is a really long example This is a really long exampleThis is a really long exampleThis is a really long
        exampleThis is a really long exampleThis is a really long example
      </Modal.Header>
      <Modal.Content>
        {repeat(8, key => (
          <p key={key} style={{ marginTop: 0 }}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Modal.Content>
    </Modal>
  </ExampleStory>
);

noCloseButton.story = ModalStoryParameters;

export const withLargeModal = () => (
  <ExampleStory component="Modal" storyName="with large modal and inputs and contents" fileName="">
    <Modal isOpen size={Modal.types.size.LARGE}>
      <Modal.Header>Large Modal</Modal.Header>
      <Modal.Content>
        <p>
          Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard of
          them.
        </p>
        <p>Label</p>
        <input type="text" data-autofocus style={{ width: "100%", height: "36px" }} />
      </Modal.Content>
      <Modal.Footer>
        <Button size={Button.types.size.LARGE}>Large Button</Button>
        <Button size={Button.types.size.LARGE} kind={Button.types.kind.PRIMARY}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </ExampleStory>
);

withLargeModal.story = ModalStoryParameters;