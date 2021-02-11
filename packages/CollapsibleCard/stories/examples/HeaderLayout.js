import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import Avatar from "@paprika/avatar";
import Switch from "@paprika/switch";
import HeaderLayout from "../../src/components/HeaderLayout";

const heading = "COVID-19 Aggregate Regulatory Feeds";
const metadata =
  "During the COVID-19 pandemic, Health Canada is working closely with domestic and international partners to anticipate and meet Canadian's health product needs.";

const HeaderLayoutStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>HeaderLayout</StoryHeading>

      <HeaderLayout>
        <HeaderLayout.Left>
          <Switch onClick={() => {}} />
        </HeaderLayout.Left>
        <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
        <HeaderLayout.Metadata>{metadata}</HeaderLayout.Metadata>
        <HeaderLayout.Counter quantity={44} />
      </HeaderLayout>
      <br />
      <HeaderLayout>
        <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
        <HeaderLayout.Metadata>{metadata}</HeaderLayout.Metadata>
        <HeaderLayout.Counter quantity={123} />
      </HeaderLayout>
      <br />
      <HeaderLayout>
        <HeaderLayout.Left>
          <Avatar size="medium">19</Avatar>
        </HeaderLayout.Left>
        <HeaderLayout.Heading>{metadata}</HeaderLayout.Heading>
        <HeaderLayout.Counter quantity={0} />
      </HeaderLayout>
    </Story>
  );
};

export default () => <HeaderLayoutStory />;
