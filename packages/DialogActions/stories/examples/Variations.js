import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import DialogActions from "../../src";

const dialogActionsDefualtProps = {
  onCancel: () => {},
  onConfirm: null,
  onDecline: () => {},
};
const dialogActionsDefualtProps2 = {
  onCancel: null,
  onConfirm: () => {},
  onDecline: () => {},
};
const dialogActionsDefualtProps3 = {
  onCancel: () => {},
  onConfirm: () => {},
  onDecline: null,
};

const ExampleStory = () => {
  return (
    <Story>
      <DialogActions isDisabled />
      <Rule />
      <DialogActions {...dialogActionsDefualtProps2} />
      <Rule />
      <DialogActions {...dialogActionsDefualtProps} />
      <Rule />
      <DialogActions {...dialogActionsDefualtProps3} />
      <Rule />
      <DialogActions />
    </Story>
  );
};

export default ExampleStory;
