import React from "react";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import ButtonGroup from "../../src";
import Example from "../Example";

const TextOnly = [{ text: "One" }, { text: "Two" }, { text: "Three" }];
const TextOnlyOneActive = [{ text: "One", isActive: true }, { text: "Two" }, { text: "Three" }];
const LongTextOnlyOneActive = [
  { text: "One" },
  { text: "Two" },
  { text: "Three Three Three Three Three Three Three Three Three Three", isActive: true },
];
const TextMultiActive = [{ text: "One", isActive: true }, { text: "Two", isActive: true }, { text: "Three" }];
const ButtonIsDisabled = [
  { text: "One", isActive: true, isDisabled: true },
  { text: "Two", isDisabled: true },
  { text: "Three" },
];

const ExampleStory = () => (
  <Story
    css={`
      max-width: 480px;
    `}
  >
    <StoryHeading>Default Text Only</StoryHeading>
    <StoryHeading level={3}>Default Size</StoryHeading>
    <Example itemData={TextOnly} />
    <StoryHeading level={3}>Large Size</StoryHeading>
    <Example size={ButtonGroup.types.size.LARGE} itemData={TextOnly} />
    <StoryHeading level={2}>Active </StoryHeading>
    <Example itemData={TextOnlyOneActive} />
    <StoryHeading level={3}>Multi default are active </StoryHeading>
    <Example isMulti itemData={TextMultiActive} />
    <Gap />
    <StoryHeading>Icon Button</StoryHeading>
    <StoryHeading level={3}>Small </StoryHeading>
    <Example hasIcons size={ButtonGroup.types.size.SMALL} itemData={TextOnly} />
    <StoryHeading level={3}>Default</StoryHeading>
    <Example hasIcons itemData={TextOnly} />
    <StoryHeading level={3}>Large</StoryHeading>
    <Example hasIcons size={ButtonGroup.types.size.LARGE} itemData={TextOnly} />
    <StoryHeading level={3}>Disabled </StoryHeading>
    <Example hasIcons isDisabled itemData={TextOnlyOneActive} />
    <Gap />
    <StoryHeading>Semantic</StoryHeading>
    <StoryHeading level={3}>Default </StoryHeading>
    <Example hasIcons isSemantic itemData={TextOnlyOneActive} />
    <StoryHeading level={3}>Disabled</StoryHeading>
    <Example hasIcons isSemantic itemData={ButtonIsDisabled} />
    <Gap />
    <StoryHeading>Layout</StoryHeading>
    <StoryHeading level={3}>Default</StoryHeading>
    <Example hasIcons itemData={LongTextOnlyOneActive} />
    <StoryHeading level={3}>Stretch to fit parent container</StoryHeading>
    <Example hasIcons isFullWidth itemData={LongTextOnlyOneActive} />
  </Story>
);

export default () => <ExampleStory />;
