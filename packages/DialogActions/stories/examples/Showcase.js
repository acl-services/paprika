import React from "react";
import { boolean, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import DialogActions from "../../src";

const selections = {
  default: "primary",
  destructive: "destructive",
};

const DialogActionsProps = () => ({
  kindConfirm: selections[select("kindConfirm", Object.keys(selections), null)],
  isDisabled: boolean("isDisabled", false),
  labelCancel: text("labelCancel", "Cancel"),
  labelConfirm: text("labelConfirm", "Save"),
  labelDecline: text("labelDecline", "Don’t Save"),
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
