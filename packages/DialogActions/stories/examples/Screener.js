import React from "react";
import Screener from "screener-storybook/src/screener";
import { Story } from "storybook/assets/styles/common.styles";
import DialogActions from "../../src";

const ExampleStory = () => {
  return (
    <Screener>
      <Story>
        <DialogActions />
      </Story>
    </Screener>
  );
};

export default ExampleStory;
