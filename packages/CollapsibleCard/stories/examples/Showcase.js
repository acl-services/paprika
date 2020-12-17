import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";

import CollapsibleCard from "../../src";

const ExampleStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>Collapsible card</StoryHeading>
      <CollapsibleCard label="Avatar, metadata with label">
        <CollapsibleCard.Avatar>C</CollapsibleCard.Avatar>
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        Content
      </CollapsibleCard>
    </Story>
  );
};

export default () => <ExampleStory />;
