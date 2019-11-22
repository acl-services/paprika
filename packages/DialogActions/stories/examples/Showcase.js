import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import DialogActions from "../../src";

const DialogActionsProps = () => ({
  hasCancel: boolean("hasCancel", true),
  hasConfirm: boolean("hasConfirm", true),
  hasDecline: boolean("hasDecline", true),
  isDestructive: boolean("isDestructive", false),
  isDisabled: boolean("isDisabled", false),
  labelCancel: text("labelCancel", "Cancel"),
  labelConfirm: text("labelConfirm", "Save"),
  labelDecline: text("labelDecline", "Don't Save"),
  onCancel: action("Cancel Clicked"),
  onConfirm: action("Confirm Clicked"),
  onDecline: action("Decline Clicked"),
});

const ExampleStory = props => (
  <Story>
    <div>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <hr />
      <DialogActions {...props} />
    </div>
  </Story>
);

export default () => <ExampleStory {...DialogActionsProps()} />;
