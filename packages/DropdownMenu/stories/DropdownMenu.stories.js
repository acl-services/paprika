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
import ZIndexExample from "./examples/ZIndex";
import DropdownMenuScroll from "./examples/DropdownMenuScroll";

storiesOf("DropdownMenu", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("DropdownMenu", () => (
    <DropdownMenuStory>
      <DropdownMenuExample />
    </DropdownMenuStory>
  ))
  .add("with locale", () => (
    <DropdownMenuStory>
      <L10n locale="zh">
        <DropdownMenuExample />
      </L10n>
    </DropdownMenuStory>
  ))
  .add("with multiple confirmation modals", () => (
    <DropdownMenuStory>
      <DropdownMenuMultiConfirmationExample />
    </DropdownMenuStory>
  ))
  .add("with disabled items", () => (
    <DropdownMenuStory>
      <DropdownMenuDisabledExample />
    </DropdownMenuStory>
  ))
  .add("with dividers", () => (
    <DropdownMenuStory>
      <DropdownMenuDividersExample />
    </DropdownMenuStory>
  ))
  .add("with longest story", () => (
    <DropdownMenuStory>
      <DropdownMenuLongestExample />
    </DropdownMenuStory>
  ))
  .add("with trigger examples", () => (
    <DropdownMenuStory>
      <DropdownMenuTriggerExample />
    </DropdownMenuStory>
  ))
  .add("Z Index", () => (
    <DropdownMenuStory>
      <ZIndexExample />
    </DropdownMenuStory>
  ))
  .add("with scroll on overflow-y", () => (
    <DropdownMenuStory>
      <DropdownMenuScroll />
    </DropdownMenuStory>
  ));
