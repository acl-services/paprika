import React from "react";
import { boolean, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ExampleStory from "storybook/components/ExampleStory";
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

const Showcase = props => {
  return (
    <ExampleStory storyName="DialogActions" tagline={ExampleStory.defaultTaglines.showcase}>
      <L10n locale="en">
        <DialogActions {...props} />
      </L10n>
    </ExampleStory>
  );
};

export default () => <Showcase {...DialogActionsProps()} />;
