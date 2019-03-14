import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small } from "storybook/assets/styles/common.styles";
import Button from "../../Button";

function clickHandler() {
  action("Clicked a button")();
}

const ExampleStory = () => {
  const buttonRef = React.createRef();

  setTimeout(() => {
    buttonRef.current.focus();
  }, 1000);

  return (
    <Story>
      <p>
        <Button onClick={clickHandler} ref={buttonRef}>
          Button
        </Button>
      </p>
      <p>
        <Small>This Button will capture the focus after 1 second.</Small>
      </p>
    </Story>
  );
};

export default ExampleStory;
