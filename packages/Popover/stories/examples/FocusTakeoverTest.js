import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Takeover from "@paprika/takeover";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Popover from "../../src";

export default function ExampleStory() {
  const viewInIframeLink = (
    <a href="/iframe.html?id=popover-dev--testing-focus-management-in-takeover&viewMode=story" target="_blank">
      View in iframe
    </a>
  );

  const popoverContent = (
    <p>
      Try <a href="http://www.google.ca">clicking this</a> with the mouse or keyboard... you cannot -- the Takeover
      prevents both. That is not good.
    </p>
  );

  return (
    <Story>
      <Takeover isOpen>
        <Takeover.Header>Takeover heading</Takeover.Header>
        <Takeover.Content>
          {viewInIframeLink}
          <p>
            This example demonstrates how the Popover handles focus when created inside of a Takeover. Click the icons
            below to see how the popovers behave.
          </p>
          <p>The Popover gets added at the end of the DOM when created, and the Takeover traps focus.</p>
          <p>
            A work-around is to add either `isEager` or `shouldKeepFocus` to the Popover. This will keep it open, but:
            screenreaders will not read its content, and you cannot interact with its content with the mouse or
            keyboard.
          </p>
          <hr />
          <h3>Popover with `shouldKeepFocus` or `isEager`:</h3>
          <Popover shouldKeepFocus>
            <Popover.Trigger>
              <InfoIcon />
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Card>{popoverContent}</Popover.Card>
            </Popover.Content>
            <Popover.Tip />
          </Popover>
          <p>
            The Popover opens, but the Takeover prevents you from interacting with its contents with the mouse or
            keyboard.
          </p>
          <hr />
          <h3>Popover with no props:&nbsp;</h3>
          <Popover>
            <Popover.Trigger>
              <InfoIcon />
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Card>{popoverContent}</Popover.Card>
            </Popover.Content>
            <Popover.Tip />
          </Popover>
          <p>
            When you open the Popover, focus goes to its content -- but the Takeover notices that it lost focus, and
            takes it right back again by moving the focus back to the last element that had it. Now since the Popover
            lost focus, it closes. So the net effect: when you open a Popover in a Takeover, it closes right away.
          </p>
          <hr />
          {viewInIframeLink}
        </Takeover.Content>
      </Takeover>
    </Story>
  );
}
