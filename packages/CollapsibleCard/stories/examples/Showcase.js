import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import CollapsibleCard from "../../src";

const ShowcaseStory = () => (
  <Story>
    <StoryHeading level={1}>CollapsibleCard</StoryHeading>
    <Tagline>
      Styled collapsible card component. Check the &quot;Knobs&quot; and &quot;Actions&quot; tabs in the Storybook
      sidepanel.
    </Tagline>
    <br />
    <CollapsibleCard
      initialIsCollapsed={boolean("initialIsCollapsed", true)}
      isEditing={boolean("isEditing", false)}
      onToggleIsCollapsed={newStateIsCollapsed => {
        action(newStateIsCollapsed ? "Collapsing" : "Expanding")();
      }}
    >
      <CollapsibleCard.Header>
        <CollapsibleCard.Segment>Put your heading in here.</CollapsibleCard.Segment>
      </CollapsibleCard.Header>
      <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
    </CollapsibleCard>
  </Story>
);

export default ShowcaseStory;
