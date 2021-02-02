import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline, repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import tokens from "@paprika/tokens";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import SidePanel from "@paprika/sidepanel";
import Heading from "@paprika/heading";
import * as types from "../src/types";

import Modal from "../src";

// eslint-disable-next-line import/no-named-as-default-member
const { Header, Content, Footer, FocusLock } = Modal;

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
        <Header hasCloseButton={boolean("Has close button", true, "Header")}>Header</Header>
        {children}
        <Footer>
          <Button kind={Button.types.kind.PRIMARY}>Primary</Button>
          <Button>Secondary</Button>
          <Button kind={Button.types.kind.MINOR} onClick={toggle}>
            Cancel
          </Button>
        </Footer>
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
      <Content>
        {repeat(8, key => (
          <p key={key}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Content>
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
      <Content>
        {repeat(25, key => (
          <p key={key}>Some content here</p>
        ))}
      </Content>
    </ModalStory>
  ))
  .add("with full-width content", () => (
    <ModalStory>
      <DemoFullWidthContent />
    </ModalStory>
  ))
  .add("with autofocus on input", () => (
    <Modal isOpen>
      <Header>Header</Header>
      <Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Content>
    </Modal>
  ))
  .add("with disabled autofocus", () => (
    <Modal isOpen>
      <FocusLock autoFocus={false} />
      <Header>Header</Header>
      <Content>
        <p>autofocus disabled</p>
      </Content>
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
          <Header refHeading={refHeading}>Header</Header>
          <Content>
            <p>
              Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw
              denim tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch
              ramps cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian
              drinking vinegar.
            </p>
          </Content>
        </Modal>
      </Story>
    );
  })
  .add("with header coloured ", () => (
    <Modal isOpen>
      <FocusLock autoFocus={false} />
      <Header style={{ backgroundColor: tokens.color.blueLighten30 }}>
        This is a really long example This is a really long exampleThis is a really long exampleThis is a really long
        exampleThis is a really long exampleThis is a really long example
      </Header>
      <Content>
        {repeat(8, key => (
          <p key={key} style={{ marginTop: 0 }}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Content>
    </Modal>
  ))
  .add("with truncated (single line) header text ", () => (
    <Modal isOpen>
      <FocusLock autoFocus={false} />
      <Header isSingleLine>
        This is a really long example This is a really long exampleThis is a really long exampleThis is a really long
        exampleThis is a really long exampleThis is a really long example
      </Header>
      <Content>
        {repeat(8, key => (
          <p key={key} style={{ marginTop: 0 }}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Content>
    </Modal>
  ))
  .add("with truncated (single line) header text and no close button ", () => (
    <Modal isOpen>
      <FocusLock autoFocus={false} />
      <Header isSingleLine hasCloseButton={false}>
        This is a really long example This is a really long exampleThis is a really long exampleThis is a really long
        exampleThis is a really long exampleThis is a really long example
      </Header>
      <Content>
        {repeat(8, key => (
          <p key={key} style={{ marginTop: 0 }}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Content>
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
          <Header>Header</Header>
          <Content>
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
          </Content>
          <Footer>
            <Button kind={Button.types.kind.PRIMARY}>Primary</Button>
            <Button kind={Button.types.kind.MINOR} onClick={toggle}>
              Cancel
            </Button>
          </Footer>
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
  .add("with nested SidePanel", () =>
    React.createElement(() => {
      const [isOpen, setIsOpen] = React.useState(false);
      const toggle = () => {
        setIsOpen(state => !state);
      };

      return (
        <ModalStory>
          <Content>
            <SidePanel isOpen={isOpen} onClose={toggle}>
              <SidePanel.Overlay />
              <SidePanel.Trigger kind={SidePanel.types.kind.PRIMARY} onClick={toggle}>
                {isOpen ? "close" : "open side panel"}
              </SidePanel.Trigger>
              <SidePanel.Header>Header</SidePanel.Header>
            </SidePanel>
          </Content>
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
              <Header hasCloseButton={boolean("Has close button", true, "Header")}>Header</Header>
              <Content>
                <input type="text" defaultValue="press enter while focus" />
              </Content>
              <Footer>
                <Button isSubmit isSemantic={false} kind={Button.types.kind.PRIMARY}>
                  Primary
                </Button>
              </Footer>
            </form>
          </Modal>
        </LongBlock>
      );
    })
  );

storiesOf(`${storyName}/Backyard/Tests/Screener`, module)
  .add("small", () => (
    <ModalStory>
      <Content>
        <p>Some content here</p>
      </Content>
    </ModalStory>
  ))
  .add("symmetric reducing of &::before and &::after", () => (
    <ModalStory>
      <Content>
        <p>height of this modal bigger than (100% - (124px * 2)) on 1280x1024</p>
        {repeat(17, key => (
          <p key={key}>Some content here</p>
        ))}
      </Content>
    </ModalStory>
  ))
  .add("scroll in content area", () => (
    <ModalStory>
      <Content>
        <p>height of this modal bigger than (100% - (24px * 2)) on 1280x1024</p>
        {repeat(24, key => (
          <p key={key}>Some content here</p>
        ))}
      </Content>
    </ModalStory>
  ))
  .add("focus lock content input", () => (
    <ModalStory>
      <Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Content>
    </ModalStory>
  ))
  .add("focus lock disabled", () => (
    <ModalStory>
      <FocusLock autoFocus={false} />
      <Content>
        <p>autofocus disabled</p>
      </Content>
    </ModalStory>
  ));
