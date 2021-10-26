import React from "react";
import { ThemeProvider } from "styled-components";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Button, { atlasButton, starlingButton } from "../../src";

export default () => (
  <>
    <Gap.Small />

    <StoryHeading level={1}>No theme</StoryHeading>
    <Button>Raw denim mixtape</Button>
    <Gap />
    <StoryHeading level={1}>Starling theme</StoryHeading>
    <StoryHeading level={3}>Via prop</StoryHeading>
    <Button theme={starlingButton}>Default Button</Button>
    <Gap.Inline />
    <Button theme={starlingButton} kind="primary">
      Primary Button
    </Button>
    <Gap.Inline />
    <Button theme={starlingButton} kind="secondary">
      Secondary Button
    </Button>
    <Gap.Small />
    <CodeHeading>{`size={large}`}</CodeHeading>
    <Button theme={starlingButton} size="large">
      Mumblecore hammock polaroid
    </Button>

    <Gap.Small />
    <StoryHeading level={3}>Via provider</StoryHeading>
    <ThemeProvider theme={starlingButton}>
      <Button>YOLO flexitarian succulents</Button>
      <Gap.Small />
      <CodeHeading>{`size={large}`}</CodeHeading>
      <Button size="large">Mumblecore hammock polaroid</Button>
    </ThemeProvider>

    <Gap />

    <StoryHeading level={1}>Atlas theme</StoryHeading>
    <ThemeProvider theme={atlasButton}>
      <Button>Default Button</Button>
      <Gap.Inline />
      <Button kind="primary">Primary Button</Button>
      <Gap.Inline />
      <Button kind="secondary">Secondary Button</Button>
      <Gap.Inline />
      <CodeHeading>{`kind={primary} size={large}`}</CodeHeading>
      <Button kind="primary" size="large">
        Artisan vegan skateboard
      </Button>
    </ThemeProvider>
  </>
);
