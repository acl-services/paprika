import React from "react";
import styled from "styled-components";
import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import TakeoverStory from "./TakeoverStory";
import Takeover from "../src";

const DemoFullWidthContent = styled.div`
  background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
  flex: 1 1 auto;
`;

const storyName = getStoryName("Takeover");

export default {
  title: `${storyName}/Examples`,
  component: Takeover,
};

export const basic = () => (
  <ExampleStory component="Takeover" storyName="Basic">
    <TakeoverStory>
      <Takeover.Content className="storybook-takeover__content">
        {repeat(100, key => (
          <p key={key}>Some content here</p>
        ))}
      </Takeover.Content>
    </TakeoverStory>
  </ExampleStory>
);

basic.story = exampleStoryParameters;

export const fullWidth = () => (
  <ExampleStory component="Takeover" storyName="with full-width content">
    <TakeoverStory>
      <DemoFullWidthContent />
    </TakeoverStory>
  </ExampleStory>
);

fullWidth.story = exampleStoryParameters;

export const autoFocusDisable = () => (
  <ExampleStory component="Takeover" storyName="with autofocus disabled">
    <TakeoverStory>
      <Takeover.FocusLock autoFocus={false} />
      <Takeover.Content>
        <input type="text" data-autofocus />
      </Takeover.Content>
    </TakeoverStory>
  </ExampleStory>
);

autoFocusDisable.story = exampleStoryParameters;

export const autoFocusInput = () => (
  <ExampleStory component="Takeover" storyName="with autofocus on input">
    <TakeoverStory>
      <Takeover.Content>
        <input type="text" data-autofocus />
      </Takeover.Content>
    </TakeoverStory>
  </ExampleStory>
);

autoFocusInput.story = exampleStoryParameters;

export const FocusHeading = () => {
  const refHeading = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);

  return (
    <ExampleStory component="Modal" storyName="with focus on heading">
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
            Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw denim
            tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch ramps
            cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian drinking
            vinegar.
          </p>
        </Takeover.Content>
      </Takeover>
    </ExampleStory>
  );
};

FocusHeading.story = exampleStoryParameters;
