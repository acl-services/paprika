import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import * as Multi from "./examples/multi";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples/Multi`, module)
  .add("Basic", () => <Multi.Basic />)
  .add("Basic with preselected options", () => <Multi.BasicWithPreselectedOptions />)
  .add("Basic is disabled", () => <Multi.BasicIsDisabled />)
  .add("Basic is disabled while open", () => <Multi.BasicIsDisabledWhileOpen />)
  .add("With Custom Checkboxes", () => <Multi.WithCustomCheckboxes />)
  .add("Footer", () => <Multi.Footer />)
  .add("With Groups", () => <Multi.WithGroups />)
  .add("With Filter", () => <Multi.WithFilter />)
  .add("With Groups and have preselected options", () => <Multi.WithGroupsAndHavePreselectedOptions />)
  .add("Controlled listbox", () => <Multi.ControlledIsSelected />)
  .add("UnControlled defaultIsSelected listbox", () => <Multi.DefaultIsSelected />)
  .add("Fully Controlled with Filter", () => <Multi.FullyOptionControlledWithFilter />)
  .add("Trigger is hidden when isInline", () => (
    <Story>
      <Multi.TriggerIsHidden />
    </Story>
  ));
