import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import { Story } from "storybook/assets/styles/common.styles";
import DialogActions from "../../src";

const screenerScript = new Steps()
  .click(".screener-dialog-actions [data-pka-anchor='dialog-actions__confirm']")
  .click(".screener-dialog-actions [data-pka-anchor='dialog-actions__decline']")
  .click(".screener-dialog-actions [data-pka-anchor='dialog-actions__cancel']")
  .end();

const ExampleStory = () => {
  return (
    <Screener steps={screenerScript}>
      <Story>
        <DialogActions />
      </Story>
    </Screener>
  );
};

export default ExampleStory;
