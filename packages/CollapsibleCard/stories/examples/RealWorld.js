import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import Avatar from "@paprika/avatar";
import Button from "@paprika/button";
import Checkbox from "@paprika/checkbox";
import OverflowMenu from "@paprika/overflow-menu";
import StatusTracker from "@paprika/status-tracker";
import Switch from "@paprika/switch";
import Toast from "@paprika/toast";
import CollapsibleCard from "../../src";
import HeaderLayout from "../../src/components/HeaderLayout";
import RealWorldTabsStory from "./RealWorld-Tabs";

const heading = "COVID-19 Aggregate Regulatory Feeds";
const metadata =
  "During the COVID-19 pandemic, Health Canada is working closely with domestic and international partners to anticipate and meet Canadian's health product needs.";

function Lipsum() {
  return (
    <p style={{ margin: 0 }}>
      Sed eget accumsan dolor, et volutpat odio. Donec vel vehicula metus. Donec urna quam, ullamcorper vitae magna non,
      semper dictum risus. Maecenas dui dolor, tempus ut arcu sit amet, bibendum rhoncus nulla. Morbi non lacus mi.
      Curabitur eleifend convallis imperdiet. Proin volutpat placerat dictum. Morbi blandit eu libero sit amet pretium.
      Cras gravida purus tempor libero ornare sodales. Mauris hendrerit tempus sapien vel finibus. In nec risus
      pharetra, hendrerit sapien sit amet, eleifend orci. Ut efficitur elit nec mauris suscipit molestie.
    </p>
  );
}

const RealWorldStory = () => (
    <Story>
      <StoryHeading level={1}>Real-world Examples</StoryHeading>
      <Tagline>These examples demonstrate how the CollapsibleCard will really be used in the real world.</Tagline>
      <br />
      <Toast kind="warning">
        It is important to <code>e.stopPropagation()</code> on any clickable components that are put into the{" "}
        <code>CollapsibleCard.Header</code>, otherwise clicking on them will expand/collapse the component.
      </Toast>
      <Toast kind="warning">
        You may have to pass the <code>a11yHeadingLevel</code> prop into the <code>HeaderLayout.Heading</code> component
        to prevent a11y errors.
      </Toast>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>
            <HeaderLayout>
              <HeaderLayout.Left>
                <div style={{ paddingTop: "8px" }}>
                  <Switch
                    a11yText="click me"
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  />
                </div>
              </HeaderLayout.Left>
              <HeaderLayout.Heading a11yHeadingLevel={3}>{heading}</HeaderLayout.Heading>
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
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment width={60}>
            <HeaderLayout>
              <HeaderLayout.Left>
                <Avatar size="medium" backgroundColor="#575757" color="#f0f0f0">
                  Co
                </Avatar>
              </HeaderLayout.Left>
              <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
              <HeaderLayout.Metadata>Resize window and watch the buttons&apos; alignment change</HeaderLayout.Metadata>
              <HeaderLayout.Counter quantity={44} />
            </HeaderLayout>
          </CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={40}>
            <div style={{ paddingTop: "2px" }}>
              <div style={{ display: "inline-block", borderRight: "1px solid silver", marginRight: "16px" }}>
                <Button
                  onClick={e => {
                    e.stopPropagation();
                  }}
                  kind="primary"
                >
                  Save
                </Button>
                &nbsp;
                <Button
                  onClick={e => {
                    e.stopPropagation();
                  }}
                  kind="minor"
                >
                  Cancel
                </Button>
              </div>
              <Button
                onClick={e => {
                  e.stopPropagation();
                }}
                kind="flat"
              >
                click 1
              </Button>
              &nbsp;
              <Button
                onClick={e => {
                  e.stopPropagation();
                }}
                kind="flat"
              >
                click 2
              </Button>
              &nbsp;
              <Button
                onClick={e => {
                  e.stopPropagation();
                }}
                kind="flat"
              >
                click 3
              </Button>
            </div>
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment width={40}>
            <HeaderLayout>
              <HeaderLayout.Left>
                <div style={{ paddingTop: "8px" }}>
                  <Checkbox
                    a11yText="Sample"
                    size="medium"
                    checkedState="checked"
                    onChange={e => {
                      e.stopPropagation();
                    }}
                  />
                </div>
              </HeaderLayout.Left>
              <HeaderLayout.Heading>{heading}</HeaderLayout.Heading>
              <HeaderLayout.Metadata>{metadata}</HeaderLayout.Metadata>
              <HeaderLayout.Counter quantity={44} />
            </HeaderLayout>
          </CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={10} />
          <CollapsibleCard.Segment width={40}>
            <StatusTracker>
              <StatusTracker.Point name="Draft" kind={StatusTracker.types.kind.PAST} description="Desc" />
              <StatusTracker.Point name="In review" description="Desc2" kind={StatusTracker.types.kind.CURRENT}>
                <OverflowMenu>
                  <OverflowMenu.Trigger
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  />
                  <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
                  <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
                </OverflowMenu>
              </StatusTracker.Point>
              <StatusTracker.Point name="Approve" kind={StatusTracker.types.kind.FUTURE} />
              <StatusTracker.Point name="Done" kind={StatusTracker.types.kind.FUTURE} />
            </StatusTracker>
          </CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={10} />
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <RealWorldTabsStory />
    </Story>
  );

export default RealWorldStory;
