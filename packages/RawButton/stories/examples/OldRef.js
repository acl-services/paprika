import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small } from "storybook/assets/styles/common.styles";
import RawButton from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const ExampleStory = () => {
  let buttonRef;

  const setRef = node => {
    buttonRef = node;
  };

  React.useEffect(() => {
    const focusTimer = setTimeout(() => {
      buttonRef.focus();
    }, 1000);
    return () => {
      clearTimeout(focusTimer);
    };
  });

  return (
    <Story>
      <p>
        <RawButton onClick={clickHandler} ref={setRef}>
          RawButton with callback ref
        </RawButton>
      </p>
      <p>
        <Small>This RawButton will capture the focus after 1 second.</Small>
      </p>
    </Story>
  );
};

export default ExampleStory;
