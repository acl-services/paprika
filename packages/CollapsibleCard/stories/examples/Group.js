import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import CollapsibleCard from "../../src";

const GroupStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>Group - with header</StoryHeading>

      <CollapsibleCard.Group>
        <CollapsibleCard.Group.Header>This is my header. Anything can go in here.</CollapsibleCard.Group.Header>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>First card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            When there is only one <code>CollapsibleCard.Segment</code> in the <code>CollapsibleCard.Header</code>, it
            goes the full-width of the page; the segments cannot break onto multiple lines since there is only one of
            them.
          </CollapsibleCard.Body>
        </CollapsibleCard>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Second card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            When there is only one <code>CollapsibleCard.Segment</code> in the <code>CollapsibleCard.Header</code>, it
            goes the full-width of the page; the segments cannot break onto multiple lines since there is only one of
            them.
          </CollapsibleCard.Body>
        </CollapsibleCard>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Last card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            When there is only one <code>CollapsibleCard.Segment</code> in the <code>CollapsibleCard.Header</code>, it
            goes the full-width of the page; the segments cannot break onto multiple lines since there is only one of
            them.
          </CollapsibleCard.Body>
        </CollapsibleCard>
      </CollapsibleCard.Group>
      <br />
      <StoryHeading level={1}>Group - no header</StoryHeading>
      <CollapsibleCard.Group>
        <CollapsibleCard isEditing>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>First card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            When there is only one <code>CollapsibleCard.Segment</code> in the <code>CollapsibleCard.Header</code>, it
            goes the full-width of the page; the segments cannot break onto multiple lines since there is only one of
            them.
          </CollapsibleCard.Body>
        </CollapsibleCard>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Second card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            When there is only one <code>CollapsibleCard.Segment</code> in the <code>CollapsibleCard.Header</code>, it
            goes the full-width of the page; the segments cannot break onto multiple lines since there is only one of
            them.
          </CollapsibleCard.Body>
        </CollapsibleCard>
        <CollapsibleCard>
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Last card</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            When there is only one <code>CollapsibleCard.Segment</code> in the <code>CollapsibleCard.Header</code>, it
            goes the full-width of the page; the segments cannot break onto multiple lines since there is only one of
            them.
          </CollapsibleCard.Body>
        </CollapsibleCard>
      </CollapsibleCard.Group>
    </Story>
  );
};

export default () => <GroupStory />;
