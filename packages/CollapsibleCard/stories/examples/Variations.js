import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import Counter from "@paprika/counter";
import Switch from "@paprika/switch";
import StatusTracker from "@paprika/status-tracker";
import CollapsibleCard from "../../src";

// TODO: responsiveness (first using just query, then using ResizeDetector?)
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
  const currentPointRef = React.useRef(null);

  return (
    <Story>
      <StoryHeading level={1}>Collapsible Card variations</StoryHeading>
      <h3>Full-width</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <div>
            <TestHeader />
          </div>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <h3>Half A</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header type="half">
          <div>
            <TestHeader />
          </div>
          <div>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            moar please
          </div>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <h3>Half B</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header type="half">
          <div>
            <ShortText />
          </div>
          <div>
            <button type="button" onClick={e => {}}>
              Right
            </button>
          </div>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <h3>Third</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header type="third">
          <div>
            <TestHeader />
          </div>
          <div>
            <StatusTracker>
              <StatusTracker.Point name="Draft" kind={StatusTracker.types.kind.PAST} description="desc2" />

              <StatusTracker.Point
                name="In review"
                description="desc"
                kind={StatusTracker.types.kind.CURRENT}
                ref={currentPointRef}
              />
              <StatusTracker.Point name="Approve" kind={StatusTracker.types.kind.FUTURE} />
              <StatusTracker.Point name="Done" kind={StatusTracker.types.kind.FUTURE} />
            </StatusTracker>
          </div>
          <div>Right</div>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
    </Story>
  );
};

export default ExampleStory;
