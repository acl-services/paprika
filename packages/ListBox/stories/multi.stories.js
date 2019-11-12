import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import * as Multi from "./examples/multi";

storiesOf("ListBox / multi", module).add("Basic", () => <Multi.Basic />);
storiesOf("ListBox / multi", module).add("Basic with preselected options", () => <Multi.BasicWithPreselectedOptions />);
storiesOf("ListBox / multi", module).add("Basic is disabled", () => <Multi.BasicIsDisabled />);
storiesOf("ListBox / multi", module).add("Basic is disabled while open", () => <Multi.BasicIsDisabledWhileOpen />);
storiesOf("ListBox / multi", module).add("With Custom Checkboxes", () => <Multi.WithCustomCheckboxes />);
storiesOf("ListBox / multi", module).add("Footer", () => <Multi.Footer />);
storiesOf("ListBox / multi", module).add("With Groups", () => <Multi.WithGroups />);
storiesOf("ListBox / multi", module).add("With Filter", () => <Multi.WithFilter />);
storiesOf("ListBox / multi", module).add("With Groups and have preselected options", () => (
  <Multi.WithGroupsAndHavePreselectedOptions />
));
storiesOf("ListBox / multi", module).add("Controlled listbox", () => <Multi.ControlledIsSelected />);
storiesOf("ListBox / multi", module).add("UnControlled defaultIsSelected listbox", () => <Multi.DefaultIsSelected />);
storiesOf("ListBox / multi", module).add("Trigger is hidden when isInline", () => (
  <Story>
    <Multi.TriggerIsHidden />
  </Story>
));
