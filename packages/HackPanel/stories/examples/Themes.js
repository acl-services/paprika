import React from "react";
import { ThemeProvider } from "styled-components";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Button from "@paprika/button";
import { TextLine } from "../helpers";
import Panel, { atlasPanel } from "../../src";

export default function ExampleTheme() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(state => !state);
  };
  const getMainElement = () => document.querySelector("div[role='main']");

  return (
    <>
      <Gap.Small />
      <ThemeProvider theme={atlasPanel}>
        <Panel
          getPushContentElement={getMainElement}
          isOpen={isOpen}
          slideFrom="left"
          onClose={toggle}
          pushContentWidth="30%"
          width="30%"
        >
          <Panel.Header>Header</Panel.Header>
          <Panel.Content>
            <TextLine repeat={10} />
          </Panel.Content>
          <Panel.Footer>
            <Button>Default action</Button>
            <Button kind="minor">Cancel</Button>
          </Panel.Footer>
        </Panel>
        <div role="main">
          <div
            css={`
              background-color: #2f3b4d;
              color: white;
            `}
          >
            <Panel.Trigger kind="primary" onClick={toggle}>
              {isOpen ? "close" : "open"}
            </Panel.Trigger>
          </div>
          <StoryHeading level={1}>Atlas Theme</StoryHeading>
          Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache
          la croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
          Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
          ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
          90s.
          <br />
          Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache
          la croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
          Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
          ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
          90s. <br />
          Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache
          la croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
          Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
          ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
          90s.
        </div>
      </ThemeProvider>
    </>
  );
}
