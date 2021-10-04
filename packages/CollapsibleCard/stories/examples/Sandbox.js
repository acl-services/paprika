import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import CollapsibleCard from "../../src";

const ShowcaseStory = () => (
  <Story>
    <StoryHeading level={1}>Sandbox</StoryHeading>
    <Tagline>Hover over them to see.</Tagline>
    <br />
    <div style={{ background: "red", padding: "20px" }}>
      <CollapsibleCard initialIsCollapsed isEditing={false}>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Collapsed, not editing</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard initialIsCollapsed={false} isEditing={false}>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Not collapsed, not editing</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard initialIsCollapsed={false} isEditing>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Not collapsed, editing</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard initialIsCollapsed isEditing>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Collapsed, editing</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
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
        <CollapsibleCard isEditing>
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
    </div>
  </Story>
);

export default ShowcaseStory;
