import React from "react";
import { boolean, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Story } from "storybook/assets/styles/common.styles";
import StoryHeader from "storybook/components/StoryHeader";
import L10n from "@paprika/l10n";
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

const ExampleStory = props => {
  return (
    <Story>
      <StoryHeader componentName="DialogActions" />
      <L10n locale="en">
        <DialogActions {...props} />
      </L10n>
    </Story>
  );
};

export default () => <ExampleStory {...DialogActionsProps()} />;
