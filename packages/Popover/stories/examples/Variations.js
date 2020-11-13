import React from "react";
import styled from "styled-components";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Button from "@paprika/button";
import Popover from "../../src";

const Centered = styled.div`
  text-align: center;
`;

export default function Variations() {
  return (
    <>
      <Gap.Small />
      <StoryHeading level={1}>Alignment</StoryHeading>
      <code>align=Popover.types.align.BOTTOM</code> (default)
      <Centered>
        <Popover>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <code>align=Popover.types.align.RIGHT</code>
      <Centered>
        <Popover align={Popover.types.align.RIGHT}>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <code>align=Popover.types.align.TOP</code>
      <Centered>
        <Popover align={Popover.types.align.TOP}>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <code>align=Popover.types.align.LEFT</code>
      <Centered>
        <Popover align={Popover.types.align.LEFT}>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <code>edge=Popover.types.align.LEFT</code>
      <Centered>
        <Popover edge={Popover.types.align.LEFT}>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <code>edge=Popover.types.align.RIGHT</code>
      <Centered>
        <Popover edge={Popover.types.align.RIGHT}>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <StoryHeading level={1}>Width</StoryHeading>
      <code>maxWidth=120</code>
      <Centered>
        <Popover maxWidth={120}>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <code>minWidth=320</code>
      <Centered>
        <Popover minWidth={320}>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap />
      <StoryHeading level={1}>Dark</StoryHeading>
      <code>isDark=true</code>
      <Centered>
        <Popover isDark>
          <Popover.Trigger>{handler => <Button onClick={handler}>Show Popover</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Single-origin foraged kombucha.</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Centered>
      <Gap.Large />
    </>
  );
}
