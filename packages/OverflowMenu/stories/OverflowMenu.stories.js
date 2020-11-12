import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import L10n from "@paprika/l10n";
import ShowcaseStory from "./examples/Showcase";
import { OverflowMenuStory } from "./OverflowMenu.stories.styles";
import OverflowMenuExample from "./examples/OverflowMenuExample";
import OverflowMenuMultiConfirmationExample from "./examples/OverflowMenuMultiConfirmationExample";
import OverflowMenuDividersExample from "./examples/OverflowMenuDividersExample";
import OverflowMenuLongestExample from "./examples/OverflowMenuLongestExample";
import OverflowMenuTriggerExample from "./examples/OverflowMenuTriggerExample";
import OverflowMenuOnCloseExample from "./examples/OverflowMenuOnCloseExample";
import OverflowMenuWithCustomClassExample from "./examples/OverflowMenuWithCustomClassExample";
import ZIndexExample from "./examples/ZIndex";

const storyName = getStoryName("OverflowMenu");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Basic", () => (
    <OverflowMenuStory>
      <OverflowMenuExample />
    </OverflowMenuStory>
  ))
  .add("with locale", () => (
    <OverflowMenuStory>
      <L10n locale="zh">
        <OverflowMenuExample />
      </L10n>
    </OverflowMenuStory>
  ))
  .add("with multiple confirmation modals", () => (
    <OverflowMenuStory>
      <OverflowMenuMultiConfirmationExample />
    </OverflowMenuStory>
  ))
  .add("with dividers", () => (
    <OverflowMenuStory>
      <OverflowMenuDividersExample />
    </OverflowMenuStory>
  ))
  .add("with longest story", () => (
    <OverflowMenuStory>
      <OverflowMenuLongestExample />
    </OverflowMenuStory>
  ))
  .add("with trigger examples", () => (
    <OverflowMenuStory>
      <OverflowMenuTriggerExample />
    </OverflowMenuStory>
  ))
  .add("with onClose", () => (
    <OverflowMenuStory>
      <OverflowMenuOnCloseExample />
    </OverflowMenuStory>
  ))
  .add("with custom class on Popover content", () => (
    <OverflowMenuStory>
      <OverflowMenuWithCustomClassExample />
    </OverflowMenuStory>
  ));

storiesOf(`${storyName}/Backyard/Sandbox`, module).add("Z Index", () => (
  <OverflowMenuStory>
    <ZIndexExample />
  </OverflowMenuStory>
));

storiesOf(`${storyName}/Backyard/Tests`, module).add("Cypress", () => <OverflowMenuExample />);
