import React from "react";
import { CenteredStory, Gap, Tagline, Rule, Story } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "@paprika/popover";
import ButtonExample from "./Button";
import ButtonIsEagerExample from "./ButtonIsEager";
import ShouldKeepFocusExample from "./ShouldKeepFocus";

const Variations = () => (
  <CenteredStory>
    <div>
      <Tagline>Popover Button</Tagline>
      <Story>
        <ButtonExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>Popover isEager</Tagline>
      <Story>
        <ButtonIsEagerExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>PopOver isDark</Tagline>
      <Story>
        <Popover isEager isDark defaultIsOpen>
          <Popover.Trigger>
            <span role="img" aria-label="bulb light">
              💡
            </span>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Lorem ipsum single-origin kombucha.</Popover.Card>
          </Popover.Content>
        </Popover>
      </Story>
      <Gap />
      <Rule />
      <Tagline>Popover shouldKeepFocus</Tagline>
      <Story>
        <ShouldKeepFocusExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>Popover edge</Tagline>
      <Story>
        <Popover defaultIsOpen edge={Popover.types.align.LEFT}>
          <Popover.Trigger>{handler => <Button onClick={handler}>edge left</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
          </Popover.Content>
        </Popover>
        <Gap />
        <Popover defaultIsOpen edge={Popover.types.align.RIGHT}>
          <Popover.Trigger>{handler => <Button onClick={handler}>edge right</Button>}</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
          </Popover.Content>
        </Popover>
      </Story>
      <Gap />
    </div>
  </CenteredStory>
);

export default Variations;
