import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import CollapsibleCard from "../../src";

const GroupStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>CollapsibleCard.Group</StoryHeading>
      <Tagline>
        A group of styled collapsible card components. Check the &quot;Knobs&quot; and &quot;Actions&quot; tabs in the
        Storybook sidepanel.
      </Tagline>
      <br />
      <CollapsibleCard.Group>
        <CollapsibleCard.Group.Header>
          <div style={{ paddingBottom: "16px" }}>
            Optional header (adding bottom padding is left up to the consumer).
          </div>
        </CollapsibleCard.Group.Header>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>First card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>Put your body here1.</CollapsibleCard.Body>
        </CollapsibleCard>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Second card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>Put your body here2.</CollapsibleCard.Body>
        </CollapsibleCard>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Last card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>Put your body here3.</CollapsibleCard.Body>
        </CollapsibleCard>
      </CollapsibleCard.Group>
    </Story>
  );
};

export default () => <GroupStory />;
