import React from "react";
import StoryHeader from "storybook/components/StoryHeader";
import { Story } from "storybook/assets/styles/common.styles";

import CollapsibleCard from "../../src";

const ExampleStory = () => {
  return (
    <Story>
      <StoryHeader componentName="Collapsible" />
      <CollapsibleCard label="Avatar, metadata with label">
        <CollapsibleCard.Avatar>Concur</CollapsibleCard.Avatar>
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        <CollapsibleCard.Content>Content</CollapsibleCard.Content>
      </CollapsibleCard>
    </Story>
  );
};

export default () => <ExampleStory />;
