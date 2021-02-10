import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import * as Multi from "./examples/multi";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples/Multi`, module)
  .add("Basic with preselected options", () => <Multi.BasicWithPreselectedOptions />)
  .add("With Custom Checkboxes", () => <Multi.WithCustomCheckboxes />)
  .add("With Groups", () => <Multi.WithGroups />)
  .add("With Filter", () => <Multi.WithFilter />)
  .add("With Groups and have preselected options", () => <Multi.WithGroupsAndHavePreselectedOptions />)
  .add("Controlled list-box", () => <Multi.ControlledIsSelected />)
  .add("UnControlled defaultIsSelected list-box", () => <Multi.DefaultIsSelected />)
  .add("Fully Controlled with Filter", () => <Multi.FullyOptionControlledWithFilter />)
  .add("Trigger is hidden when isInline", () => (
    <Story>
      <Multi.TriggerIsHidden />
    </Story>
  ));
