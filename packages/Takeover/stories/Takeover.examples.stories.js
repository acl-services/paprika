import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline, repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Panel from "@paprika/panel";
import Popover from "@paprika/popover";
import Heading from "@paprika/heading";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Takeover from "../src";
import * as types from "../src/types";

// /* Long block to test body scroll locking */
// const LongBlock = styled.div`
//   padding-bottom: 200vh;
// `;

// const DemoFullWidthContent = styled.div`
//   background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
//   flex: 1 1 auto;
// `;

const storyName = getStoryName("Takeover");

const OverflowMenuStoryParameters = {
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
  component: Takeover,
};

export const basic = () => (
  <ExampleStory component="Takeover" storyName="Basic" fileName="examples/OverflowMenuExample.js">
    <OverflowMenuExample />
  </ExampleStory>
);

basic.story = OverflowMenuStoryParameters;



storiesOf(`${storyName}/Examples`, module)
  .add("Basic", () => (
    <TakeoverStory>
      <Takeover.Content className="storybook-takeover__content">
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
          Open Takeover
        </Button>
        <Takeover
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
          <Takeover.Header refHeading={refHeading}>Header</Takeover.Header>
          <Takeover.Content>
            <p>
              Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw
              denim tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch
              ramps cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian
              drinking vinegar.
            </p>
          </Takeover.Content>
        </Takeover>
      </Story>
    );
  });



