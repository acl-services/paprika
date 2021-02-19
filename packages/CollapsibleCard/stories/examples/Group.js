import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import Tabs from "@paprika/tabs";
import CollapsibleCard from "../../src";

const GroupStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>Group</StoryHeading>
      <Tagline>
        The &quot;Header&quot; is optional and its &quot;padding-bottom&quot; is left up to the consumer.
      </Tagline>
      <br />
      <CollapsibleCard.Group>
        <CollapsibleCard.Group.Header>
          <Tabs size={Tabs.types.size.LARGE}>
            <Tabs.List>
              <Tabs.Tab key="one">First Tab</Tabs.Tab>
              <Tabs.Tab key="two">Second Tab</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </CollapsibleCard.Group.Header>
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
        <CollapsibleCard isEditing>
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
