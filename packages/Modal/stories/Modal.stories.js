import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline, repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import tokens from "@paprika/tokens";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Panel from "@paprika/panel";
import Heading from "@paprika/heading";
import * as types from "../src/types";

import Modal from "../src";

const storyName = getStoryName("Modal");

/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

const DemoFullWidthContent = styled.div`
  background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
  height: 1000px;
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
          <Button kind={Button.types.kind.PRIMARY}>Primary</Button>
          <Button>Secondary</Button>
          <Button kind={Button.types.kind.MINOR} onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </LongBlock>
  );
};

const Example = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;Modal /&gt;</code>
    </Heading>
    <Tagline>
      <b>Showcase</b> – Interact with the props API
    </Tagline>
    <Rule />
    <ModalStory>
      <Modal.Content>
        {repeat(8, key => (
          <p key={key}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Modal.Content>
    </ModalStory>
  </Story>
);

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    return <Example />;
  });

storiesOf(`${storyName}/Examples`, module)
  .add("Basic", () => (
    <ModalStory>
      <Modal.Content>
        {repeat(25, key => (
          <p key={key}>Some content here</p>
        ))}
      </Modal.Content>
    </ModalStory>
  ))
  .add("with full-width content", () => (
    <ModalStory>
      <DemoFullWidthContent />
    </ModalStory>
  ))
  .add("with autofocus on input", () => (
    <Modal isOpen>
      <Modal.Header>Header</Modal.Header>
      <Modal.Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Modal.Content>
    </Modal>
  ))
  .add("with disabled autofocus", () => (
    <Modal isOpen>
      <Modal.FocusLock autoFocus={false} />
      <Modal.Header>Header</Modal.Header>
      <Modal.Content>
        <p>autofocus disabled</p>
      </Modal.Content>
    </Modal>
  ))
  .add("with focus on heading", () => {
    const refHeading = React.useRef(null);
    const [isOpen, setOpen] = React.useState(false);

    return (
      <Story>
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
              Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw
              denim tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch
              ramps cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian
              drinking vinegar.
            </p>
          </Modal.Content>
        </Modal>
      </Story>
    );
  })
  .add("with header coloured ", () => (
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
  ))
  .add("with truncated (single line) header text ", () => (
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
  ))
  .add("with truncated (single line) header text and no close button ", () => (
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
  ));

storiesOf(`${storyName}/Backyard/Sandbox`, module)
  .add("Z Index", () => {
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
              Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be
              painted on top.
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
  })
  .add("with nested Panel", () =>
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
              <Panel.Trigger kind={Panel.types.kind.PRIMARY} onClick={toggle}>
                {isOpen ? "close" : "open side panel"}
              </Panel.Trigger>
              <Panel.Header>Header</Panel.Header>
            </Panel>
          </Modal.Content>
        </ModalStory>
      );
    })
  )
  .add("With form wrapping modal components ", () =>
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
    })
  );

storiesOf(`${storyName}/Backyard/Tests/Screener`, module)
  .add("small", () => (
    <ModalStory>
      <Modal.Content>
        <p>Some content here</p>
      </Modal.Content>
    </ModalStory>
  ))
  .add("symmetric reducing of &::before and &::after", () => (
    <ModalStory>
      <Modal.Content>
        <p>height of this modal bigger than (100% - (124px * 2)) on 1280x1024</p>
        {repeat(17, key => (
          <p key={key}>Some content here</p>
        ))}
      </Modal.Content>
    </ModalStory>
  ))
  .add("scroll in content area", () => (
    <ModalStory>
      <Modal.Content>
        <p>height of this modal bigger than (100% - (24px * 2)) on 1280x1024</p>
        {repeat(24, key => (
          <p key={key}>Some content here</p>
        ))}
      </Modal.Content>
    </ModalStory>
  ))
  .add("focus lock content input", () => (
    <ModalStory>
      <Modal.Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Modal.Content>
    </ModalStory>
  ))
  .add("focus lock disabled", () => (
    <ModalStory>
      <Modal.FocusLock autoFocus={false} />
      <Modal.Content>
        <p>autofocus disabled</p>
      </Modal.Content>
    </ModalStory>
  ));
