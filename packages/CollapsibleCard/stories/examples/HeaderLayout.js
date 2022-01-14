import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import Avatar from "@paprika/avatar";
import Switch from "@paprika/switch";
import Toast from "@paprika/toast";
import { HeaderLayout } from "../../src";

const heading = "COVID-19 Aggregate Regulatory Feeds";
const metadata =
  "During the COVID-19 pandemic, Health Canada is working closely with domestic and international partners to anticipate and meet Canadian's health product needs.";

const HeaderLayoutStory = () => (
  <Story>
    <StoryHeading level={1}>HeaderLayout</StoryHeading>
    <Tagline>
      This is a helper sub-component that will often be put inside of the <code>CollapsibleCard.Header</code>.
    </Tagline>
    <br />
    <Toast kind="warning">
      It is important to <code>e.stopPropagation()</code> on any clickable components that are put into the{" "}
      <code>CollapsibleCard.Header</code>, otherwise clicking on them will expand/collapse the component.
    </Toast>
    <Toast kind="warning">
      You may have to pass the <code>a11yHeadingLevel</code> prop into the <code>HeaderLayout.Heading</code> component
      to prevent a11y errors.
    </Toast>
    <br />
    <br />
    <HeaderLayout>
      <HeaderLayout.Left>
        <Switch
          onClick={e => {
            e.stopPropagation();
          }}
        />
      </HeaderLayout.Left>
      <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
      <HeaderLayout.Metadata>{metadata}</HeaderLayout.Metadata>
      <HeaderLayout.Counter quantity={44} />
    </HeaderLayout>
    <br />
    <br />
    <HeaderLayout>
      <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
      <HeaderLayout.Metadata>{metadata}</HeaderLayout.Metadata>
      <HeaderLayout.Counter quantity={123} />
    </HeaderLayout>
    <br />
    <br />
    <HeaderLayout>
      <HeaderLayout.Left>
        <Avatar size="medium">19</Avatar>
      </HeaderLayout.Left>
      <HeaderLayout.Heading>{metadata}</HeaderLayout.Heading>
    </HeaderLayout>
  </Story>
);

export default () => <HeaderLayoutStory />;
