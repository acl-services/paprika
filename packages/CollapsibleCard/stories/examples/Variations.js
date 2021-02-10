import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
// import Counter from "@paprika/counter";
// import Switch from "@paprika/switch";
// import StatusTracker from "@paprika/status-tracker";
import CollapsibleCard from "../../src";

// x go with full or half (no thirds)
// x allow them to define width of each half
// x support a breakpoint when it switches to stacked mode
// x provide a context that shares `isBlock` (so the consumer can handle and manipulate the children's style)
// x speed it up, it is doing unnecessary re-renders i think
// x convert to use .styles not .scss
// x make it look good
// - build the commonly used components for the switch/avatar/title/description/tag part
// - put together stories demonstrating the variations
// - controlled/uncontrolled
// - other props
// - Cards.Group
// - a11y, focus, see Collapsible and old CollapsibleCard
// - tests
// TODO later: clicking on buttons in the header was propagating, so i discussed with nahum and decided to make just the arrow clickable and discuss later

function Lipsum() {
  return (
    <>
      <p style={{ margin: 0 }}>
        <strong>It is up to the consumer to strip margin/padding from the content they pass in.</strong> Sed eget
        accumsan dolor, et volutpat odio. Donec vel vehicula metus. Donec urna quam, ullamcorper vitae magna non, semper
        dictum risus. Maecenas dui dolor, tempus ut arcu sit amet, bibendum rhoncus nulla. Morbi non lacus mi. Curabitur
        eleifend convallis imperdiet. Proin volutpat placerat dictum. Morbi blandit eu libero sit amet pretium. Cras
        gravida purus tempor libero ornare sodales. Mauris hendrerit tempus sapien vel finibus. In nec risus pharetra,
        hendrerit sapien sit amet, eleifend orci. Ut efficitur elit nec mauris suscipit molestie.
      </p>
    </>
  );
}

// function TestHeader() {
//   return (
//     <div className="test-header">
//       <Switch />
//       <div className="test-header__content">
//         <div style={{ display: "flex", fontWeight: "bold", justifyContent: "space-between" }}>
//           <div style={{}}>COVID-19 Aggregate Regulatory Feeds Really Long Boring Description</div>
//           <div style={{}}>
//             <Counter quantity={100} />
//           </div>
//         </div>
//         <div style={{ fontSize: "14px" }}>
//           Curabitur eleifend convallis imperdiet. Proin volutpat placerat dictum. Morbi blandit eu libero sit amet
//           pretium.
//         </div>
//       </div>
//     </div>
//   );
// }

const ExampleStory = () => {
  const [isBroken1, setIsBroken1] = React.useState(null);
  const [isBroken2, setIsBroken2] = React.useState(null);
  const [isBroken3, setIsBroken3] = React.useState(null);

  function handleChangeIsBroken1(newValue) {
    setIsBroken1(newValue);
  }

  function handleChangeIsBroken2(newValue) {
    setIsBroken2(newValue);
  }

  function handleChangeIsBroken3(newValue) {
    setIsBroken3(newValue);
  }

  return (
    <Story>
      <StoryHeading level={1}>Collapsible Card variations</StoryHeading>
      <p>
        <strong>Playground</strong>
      </p>
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>
            <Lipsum />
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <br />
      <br />
      <p>
        <strong>Full-width segment</strong>
        <br />
        This one detects how wide each segment should be and breaks at 800px
      </p>
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken1}>
          <CollapsibleCard.Segment>
            {isBroken1
              ? "Contents on multiple lines, but it doesnt matter since there is only one segment"
              : "Contents on a single line"}
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <br />
      <br />
      <p>
        <strong>Auto width segments</strong>
        <br />
        This one detects how wide each segment should be and breaks at 800px
      </p>
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken2}>
          <CollapsibleCard.Segment>Two segments, auto widths</CollapsibleCard.Segment>
          <CollapsibleCard.Segment>
            {isBroken2 ? "Contents on multiple lines" : "Contents on a single line"}
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <br />
      <br />
      <p>
        <strong>Custom width segments and custom breakpoint</strong>
        <br />
        This one has set widths and breaks when it is 600px wide
      </p>
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken3} breakpoint={600}>
          <CollapsibleCard.Segment width={70}>Two segments, custom widths</CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={30}>
            {isBroken3 ? "Contents on multiple lines" : "Contents on a single line"}
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
    </Story>
  );
};

export default ExampleStory;
