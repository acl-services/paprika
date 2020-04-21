import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import ShowcaseStory from "./examples/Showcase";
import { DropdownMenuStory } from "./DropdownMenu.stories.styles";
import DropdownMenuExample from "./examples/DropdownMenuExample";
import DropdownMenuMultiConfirmationExample from "./examples/DropdownMenuMultiConfirmationExample";
import DropdownMenuDisabledExample from "./examples/DropdownMenuDisabledExample";
import DropdownMenuDividersExample from "./examples/DropdownMenuDividersExample";
import DropdownMenuLongestExample from "./examples/DropdownMenuLongestExample";
import DropdownMenuTriggerExample from "./examples/DropdownMenuTriggerExample";

storiesOf("Dropdown Menu", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("DropdownMenu", () => (
    <DropdownMenuStory>
      <DropdownMenuExample />
    </DropdownMenuStory>
  ))
  .add("DropdownMenu with locale", () => (
    <DropdownMenuStory>
      <L10n locale="zh">
        <DropdownMenuExample />
      </L10n>
    </DropdownMenuStory>
  ))
  .add("DropdownMenu with multiple confirmation modals", () => (
    <DropdownMenuStory>
      <DropdownMenuMultiConfirmationExample />
    </DropdownMenuStory>
  ))
  .add("DropdownMenu with disabled items", () => (
    <DropdownMenuStory>
      <DropdownMenuDisabledExample />
    </DropdownMenuStory>
  ))
  .add("DropdownMenu with dividers", () => (
    <DropdownMenuStory>
      <DropdownMenuDividersExample />
    </DropdownMenuStory>
  ))
  .add("DropdownMenu with longest story", () => (
    <DropdownMenuStory>
      <DropdownMenuLongestExample />
    </DropdownMenuStory>
  ))
  .add("DropdownMenu with trigger examples", () => (
    <DropdownMenuStory>
      <DropdownMenuTriggerExample />
    </DropdownMenuStory>
  ));
