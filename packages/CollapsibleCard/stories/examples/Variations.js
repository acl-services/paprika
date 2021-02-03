import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import Counter from "@paprika/counter";
import Switch from "@paprika/switch";
import StatusTracker from "@paprika/status-tracker";
import CollapsibleCard from "../../src";

// x go with full or half (no thirds)
// - allow them to define width of each half
// - hard code the breakpoint when it switches to stacked mode (e.g. 800px), though maybe i could easily make it a prop)
// - provide a context that shares `isStacked` (so the consumer can handle and mannipulate the children)
// - build the commonly used components for the switch/avatar/title/description/tag part
// - done

// TODO: responsiveness (first using just query, then using ResizeDetector?)
// TODO: controlled/uncontrolled
// TODO: other props
// TODO: Cards.Group
// TODO: a11y, focus, see Collapsible and old CollapsibleCard
// TODO: tests
// TODO later: clicking on buttons in the header was propagating, so i discussed with nahum and decided to make just the arrow clickable and discuss later

function ShortText() {
  return "Just a few words";
}

function Lipsum() {
  return (
    <>
      <p>
        Sed eget accumsan dolor, et volutpat odio. Donec vel vehicula metus. Donec urna quam, ullamcorper vitae magna
        non, semper dictum risus. Maecenas dui dolor, tempus ut arcu sit amet, bibendum rhoncus nulla. Morbi non lacus
        mi. Curabitur eleifend convallis imperdiet. Proin volutpat placerat dictum. Morbi blandit eu libero sit amet
        pretium. Cras gravida purus tempor libero ornare sodales. Mauris hendrerit tempus sapien vel finibus. In nec
        risus pharetra, hendrerit sapien sit amet, eleifend orci. Ut efficitur elit nec mauris suscipit molestie.
      </p>
    </>
  );
}

function TestHeader() {
  return (
    <div className="test-header">
      <Switch />
      <div className="test-header__content">
        <div style={{ display: "flex", fontWeight: "bold", justifyContent: "space-between" }}>
          <div style={{}}>COVID-19 Aggregate Regulatory Feeds Really Long Boring Description</div>
          <div style={{}}>
            <Counter quantity={100} />
          </div>
        </div>
        <div style={{ fontSize: "14px" }}>
          Curabitur eleifend convallis imperdiet. Proin volutpat placerat dictum. Morbi blandit eu libero sit amet
          pretium.
        </div>
      </div>
    </div>
  );
}

const ExampleStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>Collapsible Card variations</StoryHeading>
      <h3>Full-width</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Auto Full width</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Auto 50% width</CollapsibleCard.Segment>
          <CollapsibleCard.Segment>Auto 50% width</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment width={70}>70% width</CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={30}>30% width</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      What would happen if i put in 3?
    </Story>
  );
};

export default ExampleStory;
