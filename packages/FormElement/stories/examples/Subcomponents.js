import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import FormElement from "../../src";

const { Label, Instructions, Description, Error } = FormElement;

export default function SubcomponentsExample() {
  const helpContent = (
    <>
      Help yourself{" "}
      <a href="https://youtu.be/D-Zy2P26gVM" target="_blank" rel="noopener noreferrer">
        learn more
      </a>
      .
    </>
  );

  return (
    <>
      <Gap.Small />
      <StoryHeading level={2}>FormElement.Label</StoryHeading>
      <Label help={helpContent}>Field Label</Label>
      <Gap />
      <StoryHeading level={2}>FormElement.Instructions</StoryHeading>
      <Instructions>
        These are some field instructions. Hashtag direct trade narwhal single-origin coffee irony. Banh mi brunch vegan
        semiotics aesthetic.
      </Instructions>
      <Gap />
      <StoryHeading level={2}>FormElement.Description</StoryHeading>
      <Description>
        This is a description of the field. Vinyl vexillologist mustache copper mug vaporware you probably haven‘t heard
        of them.
      </Description>
      <Gap />
      <StoryHeading level={2}>FormElement.Error</StoryHeading>
      <Error>I‘ve made a huge mistake.</Error>
    </>
  );
}
