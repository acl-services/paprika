import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small } from "storybook/assets/styles/common.styles";
import Button from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const ExampleStory = () => {
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    const focusTimer = setTimeout(() => {
      buttonRef.current.focus();
    }, 1000);
    return () => {
      clearTimeout(focusTimer);
    };
  }, []);

  return (
    <Story>
      <p>
        <Button.Close onClick={clickHandler} ref={buttonRef} />
      </p>
      <p>
        <Small>This CloseButton will capture the focus after 1 second.</Small>
      </p>
    </Story>
  );
};

export default ExampleStory;
