import React from "react";
import { ThemeProvider, css } from "styled-components";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Card from "../../src";
import "./Themes.css";

const atlasCard = {
  Card: ({ size }) => css`
    background: #eee;
    font-size: ${size === "large" ? "18px" : "14px"};
    padding: 16px;
  `,
};

const starlingCard = {
  Card: ({ size }) => css`
    border: 2px solid #ccc;
    border-radius: ${size === "large" ? "12px" : "4px"};
    padding: ${size === "large" ? "12px" : "4px"};
  `,
};

export default () => (
  <>
    <Gap.Small />

    <StoryHeading level={1}>No theme</StoryHeading>
    <Card>Raw denim mixtape</Card>
    <Gap.Small />
    <CodeHeading>{`size={large}`}</CodeHeading>

    <Card size="large">VHS unicorn tacos</Card>

    <Gap />

    <StoryHeading level={1}>Starling theme</StoryHeading>
    <StoryHeading level={3}>Via prop</StoryHeading>

    <Card theme={starlingCard}>YOLO flexitarian succulents</Card>

    <Gap.Small />
    <CodeHeading>{`size={large}`}</CodeHeading>
    <Card size="large" theme={starlingCard}>
      Mumblecore hammock polaroid
    </Card>
    <Gap.Small />
    <StoryHeading level={3}>Via provider</StoryHeading>

    <ThemeProvider theme={starlingCard}>
      <Card>YOLO flexitarian succulents</Card>
      <Gap.Small />
      <CodeHeading>{`size={large}`}</CodeHeading>
      <Card size="large">Mumblecore hammock polaroid</Card>
    </ThemeProvider>

    <Gap />

    <StoryHeading level={1}>Atlas theme</StoryHeading>
    <ThemeProvider theme={atlasCard}>
      <Card>Synth hexagon normcore</Card>
      <Gap.Small />
      <CodeHeading>{`size={large}`}</CodeHeading>
      <Card size="large">Artisan vegan skateboard</Card>
    </ThemeProvider>

    <Gap />

    <StoryHeading level={1}>CSS styling</StoryHeading>
    <div className="css-theme">
      <Card>Retro woke food truck</Card>
      <Gap.Small />
      <CodeHeading>{`size={large}`}</CodeHeading>
      <Card size="large">Post-ironic readymade brunch</Card>
    </div>
    <Gap />
    <StoryHeading level={2}>CSS customization</StoryHeading>
    <div className="css-theme">
      <Card className="css-tweak">Ethical man braid</Card>
      <Gap.Small />
      <CodeHeading>{`size={large}`}</CodeHeading>
      <Card size="large" className="css-twunk">
        Small batch vinyl
      </Card>
    </div>
    <Gap.Small />
    <CodeHeading>{`theme={atlasCard}`}</CodeHeading>
    <Card theme={atlasCard} className="css-twunk">
      Cold-brew lomography
    </Card>
  </>
);
