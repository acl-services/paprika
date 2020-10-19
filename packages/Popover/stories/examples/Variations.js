import React from "react";
import { CenteredStory, Gap, Tagline, Rule, Story } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "@paprika/popover";
import ButtonExample from "./ButtonExample";
import ButtonIsEagerExample from "./ButtonIsEagerExample";
import ShouldKeepFocusExample from "./ShouldKeepFocusExample";

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
          <Popover.Trigger data-test-attr="propagated">
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
      <Tagline>Popover defaultIsOpen</Tagline>
      <Story>
        <Popover defaultIsOpen>
          <Popover.Trigger data-test-attr="propagated">
            {handler => <Button onClick={handler}>defaultIsOpen</Button>}
          </Popover.Trigger>
          <Popover.Content data-test-attr="propagated">
            <Popover.Card data-test-attr="propagated">
              Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.
            </Popover.Card>
          </Popover.Content>
        </Popover>
      </Story>
      <Gap />
      <Rule />
      <Tagline>Popover edge</Tagline>
      <Story>
        <Popover edge={Popover.types.align.LEFT}>
          <Popover.Trigger data-test-attr="propagated">
            {handler => <Button onClick={handler}>edge left</Button>}
          </Popover.Trigger>
          <Popover.Content data-test-attr="propagated">
            <Popover.Card data-test-attr="propagated">
              Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.
            </Popover.Card>
          </Popover.Content>
        </Popover>
        <Popover edge={Popover.types.align.RIGHT}>
          <Popover.Trigger data-test-attr="propagated">
            {handler => <Button onClick={handler}>edge right</Button>}
          </Popover.Trigger>
          <Popover.Content data-test-attr="propagated">
            <Popover.Card data-test-attr="propagated">
              Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.
            </Popover.Card>
          </Popover.Content>
        </Popover>
      </Story>
      <Gap />
    </div>
  </CenteredStory>
);

export default Variations;
