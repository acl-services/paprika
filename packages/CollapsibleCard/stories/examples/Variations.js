import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";

import CollapsibleCard from "../../src";

const ExampleStory = () => {
  function renderLabel({ isCollapsed }) {
    return `With render label function - ${isCollapsed ? "Collapsed" : "Expand"}`;
  }

  return (
    <Story>
      <StoryHeading level={1}>Collapsible card variations</StoryHeading>
      <CollapsibleCard label="Avatar, metadata with label">
        <CollapsibleCard.Avatar>C</CollapsibleCard.Avatar>
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        Content
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Avatar, metadata with long long long long long long long long long long long long long long long long long long long long long long long long label">
        <CollapsibleCard.Avatar>C</CollapsibleCard.Avatar>
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        Content
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Metadata with label">
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        Content
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Avatar with label">
        <CollapsibleCard.Avatar>C</CollapsibleCard.Avatar>
        Content
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Label only">Content</CollapsibleCard>
      <br />
      <CollapsibleCard label="Label only with divider" hasDivider>
        Content
      </CollapsibleCard>
      <br />
      <CollapsibleCard label={renderLabel}>Content</CollapsibleCard>
    </Story>
  );
};

export default ExampleStory;
