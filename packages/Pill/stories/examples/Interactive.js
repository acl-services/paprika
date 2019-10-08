import React from "react";
import { action } from "@storybook/addon-actions";
import { Tagline, Story } from "storybook/assets/styles/common.styles";
import Pill from "../../src/Pill";

const InteractiveExample = () => {
  function handlePillClick() {
    action("Clicked on pill")();
  }

  return (
    <Story>
      <Tagline>Check action log for more details:</Tagline>
      <br />
      <Pill onClick={handlePillClick} pillColor="mediumRisk">
        Click me
      </Pill>
    </Story>
  );
};

export default InteractiveExample;
