import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import Avatar from "@paprika/avatar";
import Checkbox from "@paprika/checkbox";
import OverflowMenu from "@paprika/overflow-menu";
import StatusTracker from "@paprika/status-tracker";
import Switch from "@paprika/switch";
import CollapsibleCard from "../../src";
import HeaderLayout from "../../src/components/HeaderLayout";

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

const ExampleStory = () => {
  const [isBroken800, setIsBroken800] = React.useState(null);
  const [isBroken600, setIsBroken600] = React.useState(null);

  function handleChangeIsBroken800(newValue) {
    setIsBroken800(newValue);
  }

  function handleChangeIsBroken600(newValue) {
    setIsBroken600(newValue);
  }

  const heading = "COVID-19 Aggregate Regulatory Feeds";
  const metadata =
    "During the COVID-19 pandemic, Health Canada is working closely with domestic and international partners to anticipate and meet Canadian's health product needs.";

  return (
    <Story>
      <StoryHeading level={1}>Simple Examples</StoryHeading>
      <p>Expand each for an explanation.</p>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Single segment in header (100% width)</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          When there is only one <code>CollapsibleCard.Segment</code> in the <code>CollapsibleCard.Header</code>, it
          goes the full-width of the page; the segments cannot break onto multiple lines since there is only one of
          them.
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken800}>
          <CollapsibleCard.Segment>First segment in header (default 50% width)</CollapsibleCard.Segment>
          <CollapsibleCard.Segment>
            {isBroken800 ? "Widen window to put side-by-side" : "Shrink window to stack"}
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          When there are multiple <code>CollapsibleCard.Segment</code>s in the <code>CollapsibleCard.Header</code>, by
          default they will all have equal widths.
          <br />
          <br />
          By default, once the <code>CollapsibleCard</code> is less than 800px wide (this can be customized, see next
          example), it will <em>break</em> and stack the Segments instead of showing them side-by-side. Try it by
          resizing the window and see how the Segments in the header change.
          <br />
          <br />
          The consumer has complete control over the Segments&apos; styling, so could right-align the contents of the
          second Segments and when not broken, and left align it when broken.
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken600} breakpoint={600}>
          <CollapsibleCard.Segment>Custom breakpoint (600px)</CollapsibleCard.Segment>
          <CollapsibleCard.Segment>
            {isBroken600 ? "Widen window to put side-by-side" : "Shrink window to stack"}
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          You can override the point at which the <code>CollapsibleCard.Segment</code>s go from side-by-side to stacked
          (default is 800px, but this one breaks at 600px).
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken800}>
          <CollapsibleCard.Segment width={75}>First segment in header (custom 75% width)</CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={25}>
            {isBroken800 ? "Widen window to put side-by-side" : "Shrink window to stack"}
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          You can override the widths of the <code>CollapsibleCard.Segment</code>s if necessary.
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard isEditing>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>In edit mode</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard initialIsCollapsed={false}>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Initially expanded</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard
        onToggleIsCollapsed={newStateIsCollapsed => {
          alert(newStateIsCollapsed ? "Collapsing" : "Expanding");
        }}
      >
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>With toggleCollapsed handler (expand/collapse me)</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <br />
      <br />
      <StoryHeading level={1}>Real-world Examples</StoryHeading>
      <p>
        These examples utilize the <code>HeaderLayout</code> sub-component, that will probably always be used in the
        real-world.
      </p>
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>
            <HeaderLayout>
              <HeaderLayout.Left>
                <Switch onClick={() => {}} />
              </HeaderLayout.Left>
              <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
              <HeaderLayout.Metadata>{metadata}</HeaderLayout.Metadata>
              <HeaderLayout.Counter quantity={44} />
            </HeaderLayout>
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken800}>
          <CollapsibleCard.Segment width={60}>
            <HeaderLayout>
              <HeaderLayout.Left>
                <Avatar size="medium">CO</Avatar>
              </HeaderLayout.Left>
              <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
              <HeaderLayout.Metadata>Resize window and watch the buttons&apos; alignment change</HeaderLayout.Metadata>
              <HeaderLayout.Counter quantity={44} />
            </HeaderLayout>
          </CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={40}>
            <div style={{ textAlign: isBroken800 ? "left" : "right" }}>
              <button type="button">click 1</button>&nbsp;
              <button type="button">click 2</button>&nbsp;
              <button type="button">click 3</button>
            </div>
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken800}>
          <CollapsibleCard.Segment width={40}>
            <HeaderLayout>
              <HeaderLayout.Left>
                <Checkbox size="medium" checkedState="checked" />
              </HeaderLayout.Left>
              <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
              <HeaderLayout.Metadata>{metadata}</HeaderLayout.Metadata>
              <HeaderLayout.Counter quantity={44} />
            </HeaderLayout>
          </CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={60}>
            <StatusTracker>
              <StatusTracker.Point name="Draft" kind={StatusTracker.types.kind.PAST} description="Desc" />
              <StatusTracker.Point name="In review" description="Desc2" kind={StatusTracker.types.kind.CURRENT}>
                <OverflowMenu>
                  <OverflowMenu.Trigger />
                  <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
                  <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
                </OverflowMenu>
              </StatusTracker.Point>
              <StatusTracker.Point name="Approve" kind={StatusTracker.types.kind.FUTURE} />
              <StatusTracker.Point name="Done" kind={StatusTracker.types.kind.FUTURE} />
            </StatusTracker>
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
