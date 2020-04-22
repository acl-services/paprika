import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import Button from "@paprika/button";
import SidePanel from "@paprika/sidepanel";
import Popover from "@paprika/popover";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import { repeat } from "storybook/assets/styles/common.styles";
import Takeover from "../src";

/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

const DemoFullWidthContent = styled.div`
  background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
  flex: 1 1 auto;
`;

const TakeoverStory = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <LongBlock>
      <Button onClick={toggle}>Open</Button>
      <Takeover isOpen={isOpen} onClose={toggle}>
        <Takeover.Header
          hasCloseButton={boolean("Has close button", true, "Takeover.Header")}
          kind={select("Kind", ["default", "primary"], "default", "Takeover.Header")}
        >
          Header
        </Takeover.Header>
        {children}
      </Takeover>
    </LongBlock>
  );
};

storiesOf("Takeover", module)
  .addDecorator(withKnobs)

  .add("Basic", () => (
    <TakeoverStory>
      <Takeover.Content>
        {repeat(100, key => (
          <p key={key}>Some content here</p>
        ))}
      </Takeover.Content>
    </TakeoverStory>
  ))

  .add("with full-width content", () => (
    <TakeoverStory>
      <DemoFullWidthContent />
    </TakeoverStory>
  ))

  .add("with nested SidePanel", () =>
    React.createElement(() => {
      const [isOpen, setIsOpen] = React.useState(false);
      const toggle = () => {
        setIsOpen(state => !state);
      };

      return (
        <TakeoverStory>
          <Takeover.Content>
            <SidePanel isOpen={isOpen} onClose={toggle}>
              <SidePanel.Overlay />
              <SidePanel.Trigger kind="primary" onClick={toggle}>
                {isOpen ? "close" : "open side panel"}
              </SidePanel.Trigger>
              <SidePanel.Header>Header</SidePanel.Header>
            </SidePanel>
          </Takeover.Content>
        </TakeoverStory>
      );
    })
  )

  .add("with nested Popover", () => (
    <TakeoverStory>
      <Takeover.Content>
        <p>
          This example demonstrates how the Popover handles focus when created inside of a Takeover. Click the icons
          below to see how the popovers behave.
        </p>
        <Popover zIndex={11}>
          <Popover.Trigger>
            <InfoIcon />
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Card>
              <p>
                Try <a href="https://design.wegalvanize.com/">clicking this</a> with the mouse or keyboard...
              </p>
            </Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Takeover.Content>
    </TakeoverStory>
  ))

  .add("with autofocus disabled", () => (
    <TakeoverStory>
      <Takeover.FocusLock autoFocus={false} />
      <Takeover.Content>
        <input type="text" data-autofocus />
      </Takeover.Content>
    </TakeoverStory>
  ))

  .add("with autofocus on input", () => (
    <TakeoverStory>
      <Takeover.Content>
        <input type="text" data-autofocus />
      </Takeover.Content>
    </TakeoverStory>
  ))

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
        <Button onClick={toggle}>Open Takeover</Button>
        <Takeover isOpen={isOpen} onClose={toggle} zIndex={999}>
          <Takeover.Header
            hasCloseButton={boolean("Has close button", true, "Takeover.Header")}
            kind={select("Kind", ["default", "primary"], "default", "Takeover.Header")}
          >
            Header
          </Takeover.Header>
          <Takeover.Content>
            <p>
              The <code>zIndex</code> prop of this <code>&lt;Takeover&gt;</code> is also <code>99</code>.
            </p>
            <p>
              Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be
              painted on top.
            </p>
            {repeat(8, key => (
              <p key={key}>
                VHS adaptogen ethical butcher banjo vaporware street art air plant listicle irony post-ironic
                lumbersexual.
              </p>
            ))}
          </Takeover.Content>
        </Takeover>
        <div
          css={`
            position: relative;
            z-index: 99;
          `}
        >
          <p>
            The <code>z-index</code> of this content is <code>99</code>.
          </p>
          {repeat(8, key => (
            <p key={key}>
              Quinoa palo santo cold-pressed disrupt typewriter. Disrupt distillery tacos artisan taxidermy gastropub
              hexagon meggings.
            </p>
          ))}
        </div>
      </div>
    );
  });

storiesOf("Takeover / screener", module)
  .add("focus lock content input", () => (
    <TakeoverStory>
      <Takeover.Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Takeover.Content>
    </TakeoverStory>
  ))

  .add("focus lock disabled", () => (
    <TakeoverStory>
      <Takeover.FocusLock autoFocus={false} />
      <Takeover.Content>
        <p>autofocus disabled</p>
      </Takeover.Content>
    </TakeoverStory>
  ));
