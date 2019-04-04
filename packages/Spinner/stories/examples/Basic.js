import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { select, text } from "@storybook/addon-knobs";

import Spinner from "../../Spinner";

const ExampleStory = () => {
  const spinnerProps = {
    ariaText: text("ariaText"),
    caption: text("caption", "Spinning..."),
    size: select("Sizes", ["small", "medium", "large"], "medium"),
  };

  return (
    <Story>
      <Spinner {...spinnerProps} />
    </Story>
  );
};

export default ExampleStory;
