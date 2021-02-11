import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import Avatar from "@paprika/avatar";
import Switch from "@paprika/switch";
import HeaderLayout from "../../src/components/HeaderLayout";

const HeaderLayoutStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>Children</StoryHeading>

      <HeaderLayout>
        <HeaderLayout.Left>
          <Switch onClick={() => {}} />
        </HeaderLayout.Left>
        <HeaderLayout.Heading>COVID-19 Aggregate ...</HeaderLayout.Heading>
        <HeaderLayout.Metadata>During the ...</HeaderLayout.Metadata>
        <HeaderLayout.Counter value="99+" />
      </HeaderLayout>
      <br />
      <HeaderLayout>
        <HeaderLayout.Heading>COVID-19 Aggregate ...</HeaderLayout.Heading>
        <HeaderLayout.Metadata>During the ...</HeaderLayout.Metadata>
        <HeaderLayout.Counter value="99+" />
      </HeaderLayout>
      <br />
      <HeaderLayout>
        <HeaderLayout.Left>
          <Avatar>19</Avatar>
        </HeaderLayout.Left>
        <HeaderLayout.Heading>COVID-19 Aggregate ...</HeaderLayout.Heading>
        <HeaderLayout.Counter value="99+" />
      </HeaderLayout>
    </Story>
  );
};

export default () => <HeaderLayoutStory />;
